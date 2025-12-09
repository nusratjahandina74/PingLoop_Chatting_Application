import React, { useEffect, useState } from 'react'
import friends1 from "../../assets/friends1.png"
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiTriangleFill } from "react-icons/ri";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoCameraOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { useSelector } from 'react-redux';
import { getDatabase, onValue, push, ref, set } from 'firebase/database';
import moment from "moment"
import EmojiPicker from 'emoji-picker-react';
const ChatBox = () => {
  const db = getDatabase();
  const data = useSelector((selector) => (selector?.userInfo?.value?.user))
  const activeData = useSelector((state) => state?.activeChatInfo?.value)
  const [message, setMessage] = useState("")
  const [messageList, setMessageList] = useState([])
  const [showEmoji, setShowEmoji] = useState(false)
  const handleMessage = () => {
    if (!message || message === "") {
      console.log("Empty message!");
      return;
    }
    const messageRef = push(ref(db, "message/"))
    set(messageRef, {
      senderId: data.uid,
      senderName: data.displayName,
      receiverId: activeData.id,
      receiverName: activeData.name,
      message: message,
      date: moment().format()
    }).then(() => {
      setMessage("");  
    });
  };
  useEffect(() => {
    const messageRef = ref(db, "message")
    onValue(messageRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        if (
          (data.uid == item.val().senderId && activeData.id == item.val().receiverId) ||
          (data.uid == item.val().receiverId && activeData.id == item.val().senderId)
        ) {
          arr.push(item.val())
        }
      })
      setMessageList(arr);
    })
  }, [activeData.id])

  return (
    <div className='shadow font-primary px-[50px] py-[24px] rounded-[20px]'>
      <div className='flex justify-between items-center border-b pb-[30px] border-[#000000]/25'>
        <div className='flex items-center gap-x-[33px]'>
          <div>
            <img src={friends1} alt="#friends1" />
          </div>
          <div>
            <h4 className='font-semibold text-[24px]'>
              {activeData?.name ? activeData.name : "Unknown"}
            </h4>
            <p>Online</p>
          </div>
        </div>
        <div>
          <BsThreeDotsVertical className='text-[25px]' />
        </div>
      </div>
      <div className='border-b pb-[30px] border-[#000000]/25'>
        <div className='py-[56px]'>
          {messageList.map((item, index) => (
            data.uid == item.senderId ? 
              <div key={index} className='my-2 text-end'>
                <div className='relative'>
                  <p className='px-[52px] py-[13px] bg-primary inline-block font-medium text-[16px] rounded-[10px] text-white'>
                    {item?.message}
                  </p>
                  <div className='absolute bottom-[-3px] right-[-11px]'>
                    <RiTriangleFill className='text-primary text-2xl ' />
                  </div>
                </div>
                <p className='font-medium text-[12px] text-[#000000]/25 mt-2'>
                  {moment(item.date).fromNow()}
                </p>
              </div>
            :
              <div key={index} className='my-2'>
                <div className='relative'>
                  <p className='px-[52px] py-[13px] bg-[#F1F1F1] inline-block font-medium text-[16px] rounded-[10px]'>
                    {item?.message}
                  </p>
                  <div className='absolute bottom-[-3px] left-[-11px]'>
                    <RiTriangleFill className='text-[#F1F1F1] text-2xl '/>
                  </div>
                </div>
                <p className='font-medium text-[12px] text-[#000000]/25 mt-2'>
                  {moment(item.date).fromNow()}
                </p>
              </div>
          ))}
        </div>
      </div>
      <div className="relative w-full flex justify-between items-center mt-[35px]">
        <div className="bg-[#F1F1F1] w-[535px] flex items-center justify-between px-4 py-3 rounded-[10px]">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleMessage()}
            type="text"
            className="bg-transparent w-full outline-none text-[16px]"
            placeholder="Type a message..."
          />
          <div className="flex items-center gap-3">
            <div onClick={() => setShowEmoji(!showEmoji)}>
              <MdOutlineEmojiEmotions className="text-[20px] text-black/50 cursor-pointer" />
            </div>
            <IoCameraOutline className="text-[20px] text-black/50" />
          </div>
        </div>
        <div
          onClick={handleMessage}
          className="bg-black p-3 rounded-[10px] ml-3 cursor-pointer">
          <IoIosSend className="text-white text-[20px]" />
        </div>
        {showEmoji && (
          <div className='absolute bottom-[100px] left-[20px] z-50'>
            <EmojiPicker 
               onEmojiClick={(emoji) => setMessage(prev => prev + emoji.emoji)} 
/>
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatBox

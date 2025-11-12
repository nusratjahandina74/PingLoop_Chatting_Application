import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import friends1 from '../../assets/friends1.png'
import { getDatabase, onValue, ref, set} from "firebase/database";
import { useSelector } from 'react-redux';
const FriendRequest = () => {
const data = useSelector((selector) => (selector?.userInfo?.value?.user))
  console.log(data?.uid, "loginData");
  const db = getDatabase();
  const [friendRequest, setfriendRequest] = useState([])
  useEffect(() => {
    const friendrequestRef = ref(db, "friendRequest")
    onValue(friendrequestRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        if(data.uid == item.val().receiverId){
          arr.push(item.val())
        }
      })
      setfriendRequest(arr);
    })
  }, [])
  console.log(friendRequest);

  const handleFriend = (item)=> {
     console.log(item);
     set(ref(db, "friend"),{
      receiverName: item.receiverName,
      receiverId: item.receiverId,
      senderName: item.senderName,
      senderId: item.senderId
     })
     
  }

  return (
    <div className='shadow-lg rounded-lg px-5 py-3 font-primary text-primary mt-10'>
      <div className='flex justify-between items-center'>
        <h3 className='font-semibold text-[20px]'>Friend Request</h3>
        <BsThreeDotsVertical className='text-[20px]' />
      </div>
     <div className='px-2 h-[400px] overflow-y-scroll custom-scrollbar'>
       {
        friendRequest.map((item) =>(
          <div className='flex justify-between items-center mt-[17px] border-b-2 border-[#b0a9a9] pb-[10px]'>
        <div className='flex items-center'>
          <img src={friends1} alt="#friends1" />
          <div className='ml-[14px]'>
        <h4 className='font-semibold text-[18px]'>{item.senderName}</h4>
        <p className='font-medium text-[14px] text-[#4D4D4D]'>Today, 8:56pm</p>
      </div>
      </div>
      <button 
      onClick={()=>handleFriend(item)}
      className='font-semibold text-[20px] text-[#FFFFFF] bg-primary px-[8px] rounded-[5px] mr-[20px]'>
        Accept
      </button>
    </div>
        ))
       }

     
   
     </div>
     
     
    </div>
  )
}




export default FriendRequest
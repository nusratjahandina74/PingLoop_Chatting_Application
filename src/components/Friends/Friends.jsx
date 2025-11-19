import React, { useEffect } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import friends1 from '../../assets/friends1.png'
import { useState } from 'react'
import { getDatabase, onValue, push, ref, remove, set } from 'firebase/database';
import { useSelector } from 'react-redux';
const Friends = () => {
  const db = getDatabase();
  const data = useSelector((selector) => (selector?.userInfo?.value?.user))
  console.log(data?.uid, "friendData");
  const [friendList, setfriendList] = useState([])

useEffect(() => {
  const friendRef = ref(db, "friend");
  onValue(friendRef, (snapshot) => {
    const arr = [];
    snapshot.forEach((item) => {
      
      if (data?.uid === item.val().receiverId || data?.uid === item.val().senderId) {
        arr.push({ ...item.val(), key: item.key });
      }
    });
    setfriendList(arr);
  });
}, []);

//   const handleBlock = (item)=>  { 
//   console.log(item); 
//   set(push(ref(db, "block")), { 
//     blockerId: data?.uid, 
//     blockerName: data.displayName, 
//     blockedId: item.userid, 
//     blockedName: item.username
//   }).then(()=>{
//     remove(ref(db, "friend/" + item.userId))
//   }).catch((error)=>{
//     console.log(error);
    
//   })
// }

const handleBlock = (item) => {

  const blockedId = data.uid === item.receiverId ? item.senderId : item.receiverId;
  const blockedName = data.uid === item.receiverId ? item.senderName : item.receiverName;

  set(push(ref(db, "block")), {
    blockerId: data.uid,
    blockerName: data.displayName,
    blockedId: blockedId,
    blockedName: blockedName
  })
  .then(() => {
    remove(ref(db, "friend/" + item.key))
  })
  .catch((error) => {
    console.log(error);
  });
};

  return (
    <div className='shadow-lg rounded-lg px-5 py-3 font-primary text-primary'>
      <div className='flex justify-between items-center'>
        <h3 className='font-semibold text-[20px]'>Friends</h3>
        <BsThreeDotsVertical className='text-[20px]' />
      </div>
      <div className='px-2 h-[400px] overflow-y-scroll custom-scrollbar'>
        {
          friendList.map((item) => (
            <div
              className='flex justify-between items-center mt-[17px] border-b-2 border-[#b0a9a9] pb-[10px]'>
              <div className='flex items-center'>
                <img src={friends1} alt="#friends1" />
                <div className='ml-[14px]'>
                  <h4 className='font-semibold text-[14px]'>
                    {
                      data?.uid == item.receiverId ? item.senderName : item.receiverName
                    }
                    
                    </h4>
                  <p className='font-medium text-[12px] text-[#4D4D4D]'>Dinner?</p>
                </div>
              </div>
              <div className='flex items-center'>
                <button
                  onClick={()=>handleBlock(item)} 
                  className='font-semibold text-[20px] text-[#FFFFFF] bg-primary px-[8px] 
        rounded-[5px] mr-[20px]'> Block </button>
              </div>
            </div>
          ))
        }

      </div>


    </div>
  )
}

export default Friends
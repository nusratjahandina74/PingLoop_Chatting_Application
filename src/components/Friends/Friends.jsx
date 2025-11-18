import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import friends1 from '../../assets/friends1.png'
import { useSelector } from 'react-redux';
const Friends = () => {
  const friends = useSelector((state) => state?.user?.friends ?? []);
  return (
    <div className='shadow-lg rounded-lg px-5 py-3 font-primary text-primary'>
      <div className='flex justify-between items-center'>
        <h3 className='font-semibold text-[20px]'>Friends</h3>
        <BsThreeDotsVertical className='text-[20px]' />
      </div>
      <div className='px-2 h-[400px] overflow-y-scroll custom-scrollbar'>
        {friends.length > 0 ? (
          friends.map((friend) => (
            <div
              key={friend.senderId}
              className='flex justify-between items-center mt-[17px] border-b-2 border-[#b0a9a9] pb-[10px]'>
              <div className='flex items-center'>
                <img src={friends1} alt="#friends1" />
                <div className='ml-[14px]'>
                  <h4 className='font-semibold text-[14px]'>{friend.senderName}</h4>
                  <p className='font-medium text-[12px] text-[#4D4D4D]'>Dinner?</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className='font-medium text-[12px] text-[#4D4D4D]'>Today, 8:56pm</p>
        )}





      </div>


    </div>
  )
}



export default Friends
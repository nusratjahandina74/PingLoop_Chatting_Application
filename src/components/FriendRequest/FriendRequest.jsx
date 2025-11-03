import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import friends1 from '../../assets/friends1.png'
import friends2 from '../../assets/friends2.png'
import friends3 from '../../assets/friends3.png'
import friends4 from '../../assets/friends4.png'
const FriendRequest = () => {
  return (
    <div className='shadow-lg rounded-lg px-5 py-3 font-primary text-primary mt-10'>
      <div className='flex justify-between items-center'>
        <h3 className='font-semibold text-[20px]'>Friend Request</h3>
        <BsThreeDotsVertical className='text-[20px]' />
      </div>
     <div className='px-2 h-[400px] overflow-y-scroll custom-scrollbar'>
       <div className='flex justify-between items-center mt-[17px] border-b-2 border-[#b0a9a9] pb-[10px]'>
        <div className='flex items-center'>
          <img src={friends1} alt="#friends1" />
          <div className='ml-[14px]'>
        <h4 className='font-semibold text-[18px]'>Raghav</h4>
        <p className='font-medium text-[14px] text-[#4D4D4D]'>Dinner?</p>
      </div>
      </div>
      <button className='font-semibold text-[20px] text-[#FFFFFF] bg-primary px-[8px] rounded-[5px] mr-[20px]'>
        Accept
      </button>
    </div>
       <div className='flex justify-between items-center mt-[17px] border-b-2 border-[#b0a9a9] pb-[10px]'>
        <div className='flex items-center'>
          <img src={friends2} alt="#friends2" />
          <div className='ml-[14px]'>
        <h4 className='font-semibold text-[18px]'>Swathi</h4>
        <p className='font-medium text-[14px] text-[#4D4D4D]'>Sure!</p>
      </div>
      </div>
      <button className='font-semibold text-[20px] text-[#FFFFFF] bg-primary px-[8px] rounded-[5px] mr-[20px]'>
       Accept
      </button>
    </div>
       <div className='flex justify-between items-center mt-[17px] border-b-2 border-[#b0a9a9] pb-[10px]'>
        <div className='flex items-center'>
          <img src={friends3} alt="#friends3" />
          <div className='ml-[14px]'>
        <h4 className='font-semibold text-[18px]'>Kiran</h4>
        <p className='font-medium text-[14px] text-[#4D4D4D]'>Hi.....</p>
      </div>
      </div>
      <button className='font-semibold text-[20px] text-[#FFFFFF] bg-primary px-[8px] rounded-[5px] mr-[20px]'>
       Accept
      </button>
    </div>
       <div className='flex justify-between items-center mt-[17px] border-b-2 border-[#b0a9a9] pb-[10px]'>
        <div className='flex items-center'>
          <img src={friends4} alt="#friends4" />
          <div className='ml-[14px]'>
        <h4 className='font-semibold text-[18px]'>Tejeshwini C</h4>
        <p className='font-medium text-[14px] text-[#4D4D4D]'>I will call him today.</p>
      </div>
      </div>
      <button className='font-semibold text-[20px] text-[#FFFFFF] bg-primary px-[8px] rounded-[5px] mr-[20px]'>
        Accept
      </button>
    </div>
     
       <div className='flex justify-between items-center mt-[17px] border-b-2 border-[#b0a9a9] pb-[10px]'>
        <div className='flex items-center'>
          <img src={friends1} alt="#friends1" />
          <div className='ml-[14px]'>
        <h4 className='font-semibold text-[18px]'>Raghav</h4>
        <p className='font-medium text-[14px] text-[#4D4D4D]'>Dinner?</p>
      </div>
      </div>
      <button className='font-semibold text-[20px] text-[#FFFFFF] bg-primary px-[8px] rounded-[5px] mr-[20px]'>
        Accept
      </button>
    </div>
       <div className='flex justify-between items-center mt-[17px] border-b-2 border-[#b0a9a9] pb-[10px]'>
        <div className='flex items-center'>
          <img src={friends2} alt="#friends2" />
          <div className='ml-[14px]'>
        <h4 className='font-semibold text-[18px]'>Swathi</h4>
        <p className='font-medium text-[14px] text-[#4D4D4D]'>Sure!</p>
      </div>
      </div>
      <button className='font-semibold text-[20px] text-[#FFFFFF] bg-primary px-[8px] rounded-[5px] mr-[20px]'>
        Accept
      </button>
    </div>
       <div className='flex justify-between items-center mt-[17px] border-b-2 border-[#b0a9a9] pb-[10px]'>
        <div className='flex items-center'>
          <img src={friends3} alt="#friends3" />
          <div className='ml-[14px]'>
        <h4 className='font-semibold text-[18px]'>Kiran</h4>
        <p className='font-medium text-[14px] text-[#4D4D4D]'>Hi.....</p>
      </div>
      </div>
      <button className='font-semibold text-[20px] text-[#FFFFFF] bg-primary px-[8px] rounded-[5px] mr-[20px]'>
        Accept
      </button>
    </div>
       <div className='flex justify-between items-center mt-[17px] pb-[10px]'>
        <div className='flex items-center'>
          <img src={friends4} alt="#friends4" />
          <div className='ml-[14px]'>
        <h4 className='font-semibold text-[18px]'>Tejeshwini C</h4>
        <p className='font-medium text-[14px] text-[#4D4D4D]'>I will call him today.</p>
      </div>
      </div>
      <button className='font-semibold text-[20px] text-[#FFFFFF] bg-primary px-[8px] rounded-[5px] mr-[20px]'>
        Accept
      </button>
    </div>
     
   
     </div>
     
     
    </div>
  )
}




export default FriendRequest
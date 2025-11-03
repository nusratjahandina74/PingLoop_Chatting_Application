import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import grouplist1 from '../../assets/grouplist1.png'
import grouplist2 from '../../assets/grouplist2.png'
import grouplist3 from '../../assets/grouplist3.png'
const GroupList = () => {
  return (
    <div className='shadow-lg rounded-lg px-5 py-3 font-primary text-primary'>
      <div className='flex justify-between items-center'>
        <h3 className='font-semibold text-[20px]'>Groups List</h3>
        <BsThreeDotsVertical className='text-[20px]' />
      </div>
     <div className='px-2 h-[400px] overflow-y-scroll custom-scrollbar'>
       <div className='flex justify-between items-center mt-[17px] border-b-2 border-[#b0a9a9] pb-[13px]'>
        <div className='flex items-center'>
          <img src={grouplist1} alt="#grouplist1" />
          <div className='ml-[14px]'>
        <h4 className='font-semibold text-[18px]'>Friends Reunion</h4>
        <p className='font-medium text-[14px] text-[#4D4D4D]'>Hi Guys, Wassup!</p>
      </div>
      </div>
      <button className='font-semibold text-[20px] text-[#FFFFFF] bg-primary px-[22px] rounded-[5px]'>Join</button>
    </div>
      <div className='flex justify-between items-center mt-[17px] border-b-2 border-[#b0a9a9] pb-[13px]'>
        <div className='flex items-center'>
          <img src={grouplist2} alt="#grouplist2" />
          <div className='ml-[14px]'>
        <h4 className='font-semibold text-[18px]'>Friends Forever</h4>
        <p className='font-medium text-[14px] text-[#4D4D4D]'>Good to see you.</p>
      </div>
      </div>
      <button className='font-semibold text-[20px] text-[#FFFFFF] bg-primary px-[22px] rounded-[5px]'>Join</button>
    </div>
      <div className='flex justify-between items-center mt-[17px] border-b-2 border-[#b0a9a9] pb-[13px]'>
        <div className='flex items-center'>
          <img src={grouplist3} alt="#grouplist3" />
          <div className='ml-[14px]'>
        <h4 className='font-semibold text-[18px]'>Crazy Cousins</h4>
        <p className='font-medium text-[14px] text-[#4D4D4D]'>What plans today?</p>
      </div>
      </div>
      <button className='font-semibold text-[20px] text-[#FFFFFF] bg-primary px-[22px] rounded-[5px]'>Join</button>
    </div>
      <div className='flex justify-between items-center mt-[17px] border-b-2 border-[#b0a9a9] pb-[13px]'>
        <div className='flex items-center'>
          <img src={grouplist1} alt="#grouplist1" />
          <div className='ml-[14px]'>
        <h4 className='font-semibold text-[18px]'>Friends Reunion</h4>
        <p className='font-medium text-[14px] text-[#4D4D4D]'>Hi Guys, Wassup!</p>
      </div>
      </div>
      <button className='font-semibold text-[20px] text-[#FFFFFF] bg-primary px-[22px] rounded-[5px]'>Join</button>
    </div>
      <div className='flex justify-between items-center mt-[17px] border-b-2 border-[#b0a9a9] pb-[13px]'>
        <div className='flex items-center'>
          <img src={grouplist2} alt="#grouplist2" />
          <div className='ml-[14px]'>
        <h4 className='font-semibold text-[18px]'>Friends Forever</h4>
        <p className='font-medium text-[14px] text-[#4D4D4D]'>Good to see you.</p>
      </div>
      </div>
      <button className='font-semibold text-[20px] text-[#FFFFFF] bg-primary px-[22px] rounded-[5px]'>Join</button>
    </div>
      <div className='flex justify-between items-center mt-[17px] pb-[13px]'>
        <div className='flex items-center'>
          <img src={grouplist3} alt="#grouplist3" />
          <div className='ml-[14px]'>
        <h4 className='font-semibold text-[18px]'>Crazy Cousins</h4>
        <p className='font-medium text-[14px] text-[#4D4D4D]'>What plans today?</p>
      </div>
      </div>
      <button className='font-semibold text-[20px] text-[#FFFFFF] bg-primary px-[22px] rounded-[5px]'>Join</button>
    </div>
     </div>
     
     
    </div>
  )
}

export default GroupList
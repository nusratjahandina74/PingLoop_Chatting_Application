import React from 'react'
import profile from '../../assets/profile.png'
const Sidebar = () => {
  return (
    <div className='bg-primary text-white w-[186px] h-screen rounded-lg my-[35px] ml-[32px] mr-[43px]'>
      <div className='flex justify-center pt-[38px]'>
        <img src={profile} alt="#profile" />
      </div>
    </div>
  )
}

export default Sidebar
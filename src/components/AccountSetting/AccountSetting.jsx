import React from 'react'
import { RiDeleteBinFill } from "react-icons/ri";
const AccountSetting = () => {
  return (
    <div className='shadow font-primary px-[42px] py-[26px] rounded-[20px]'>
        <h2 className='font-semibold text-[20px] text-[#000000]'>Account Settings</h2>
           
                    <div className='ml-[40px] mt-[43px]'>
                        <div className='flex items-center gap-x-[36px]'>
                            <RiDeleteBinFill className='text-[25px]'/>
                            <p className='text-[20px]'>Delete Account.</p>
                        </div>
                    </div>
                    <div className='mt-[280px] text-center'>
                        <p className='text-[20px] text-[#000000]/50'>Chat App</p>
                    </div>
        </div>
  )
}

export default AccountSetting
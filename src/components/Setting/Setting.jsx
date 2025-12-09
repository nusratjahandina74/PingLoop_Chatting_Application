import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Friends from '../Friends/Friends'
import ProfileSetting from '../ProfileSetting/ProfileSetting'
import AccountSetting from '../AccountSetting/AccountSetting'
const Setting = () => {
  return (
    <div> 
        <div className='flex m-[35px]'>
              <Sidebar active="setting"/>
              <div className='w-[700px] ml-[43px] pt-[10px]'>
               <ProfileSetting/>
              </div>
              <div className='w-[700px] ml-[43px] pt-[10px]'>
                <AccountSetting/>
              </div>
            </div>
            </div>
  )
}

export default Setting
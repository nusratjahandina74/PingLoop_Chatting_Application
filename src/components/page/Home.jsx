import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import EmailVerify from './EmailVerify';
import { useNavigate } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';
import GroupList from '../GroupList/GroupList';
import Friends from '../Friends/Friends';
import UserList from '../UserList/UserList';
import FriendRequest from '../FriendRequest/FriendRequest';
import MyGroup from '../MyGroup/MyGroup';
import BlockedUser from '../BlockedUser/BlockedUser';

const Home = () => {
    const auth = getAuth();
    const navigate = useNavigate()
    const data = useSelector(state=>(state.userInfo.value))

    const [verify, setVerify] = useState(false)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
      if(!data){
            navigate("/login")
    }
    })
onAuthStateChanged(auth, (user) => {
  if (user.emailVerified) {
    setVerify(true)
  } 
  setLoading(false)
});
    // if(data.emailVerified){
    //     setVerify(true)
    // }
    // useEffect(()=>{
    //  if(data.emailVerified){
    //     setVerify(true)
    //  }
    // },[])
    if(loading){
      return null
    }
  return (
    <div>
        {
            verify ?
            <div className='w-full mx-auto'>
              <div className='flex flex-wrap justify-between text-primary'>
  <div className='w-[10%] '>
    <Sidebar />
  </div>
  <div className='w-[30%] mt-[137px]'>
    <GroupList />
  </div>
  <div className='w-[30%] mt-[33px]'>
    <Friends />
  </div>
  <div className='w-[30%] mt-[33px]'>
    <UserList />
  </div>
  <div className='w-[30%] ml-[10%]'>
    <FriendRequest />
  </div>
  <div className='w-[30%]'>
    <MyGroup />
  </div>
  <div className='w-[30%]'>
    <BlockedUser />
  </div>
</div>
            </div> : 
            <EmailVerify />
        }
    </div>
  )
}

export default Home
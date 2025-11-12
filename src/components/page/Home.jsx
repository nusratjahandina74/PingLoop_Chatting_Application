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
  const data = useSelector(state => (state.userInfo.value))

  const [verify, setVerify] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (!data) {
      navigate("/login")
    }
  })
  onAuthStateChanged(auth, (user) => {
    if (user?.emailVerified || data?.user?.displayName) {
      setVerify(true)
    }
    setLoading(false)
  });
  if (loading) {
    return null
  }
  return (
    <div>
      {
        verify ?
          <div>
            <div className='flex m-[35px]'>
              <Sidebar />
              <div className='w-[427px] ml-[43px]'>
                <GroupList />
                <FriendRequest />
              </div>
              <div className='w-[427px] ml-[43px]'>
                <Friends />
                <MyGroup />
              </div>
              <div className='w-[427px] ml-[43px]'>
                <UserList />
                <BlockedUser />
              </div>
            </div>
          </div>
          :
          <EmailVerify />
      }
    </div>
  )
}

export default Home
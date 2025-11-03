import React from 'react';
import profile from '../../assets/profile.png';
import { SlHome } from "react-icons/sl";
import { AiFillMessage } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    const confirmSignOut = window.confirm('Are you sure you want to sign out?');
    
    if (confirmSignOut) {
      signOut(auth)
        .then(() => {
          localStorage.removeItem('userinfo');
          localStorage.removeItem('token');
          localStorage.removeItem('firebase:authUser');
          navigate('/login');
        })
        .catch((error) => {
          console.log('Sign out error:', error);
        });
    }
  };

  return (
    <div className='bg-primary text-white w-[186px] h-screen rounded-lg'>
      <div className='flex justify-center pt-[38px]'>
        <img src={profile} alt="profile" />
      </div>

      <div className='relative after:absolute after:content-[" "] after:top-0 after:left-0 after:w-[161px] after:h-full after:bg-white after:z-[-1] z-1 after:ml-[25px] after:rounded-l-3xl before:absolute before:content-[" "] before:top-0 before:right-0  before:rounded-tl-lg before:rounded-bl-lg before:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)] mt-[78px] before:h-full before:w-[10px] before:bg-primary py-[20px] flex justify-center'>
        <SlHome className='text-[46px] text-primary' />
      </div>
      
      <div className='mt-[57px] flex justify-center'>
        <AiFillMessage className='text-[46px] text-[#C3C3C3]' />
      </div>
      
      <div className='mt-[57px] flex justify-center'>
        <IoSettingsOutline className='text-[46px] text-[#C3C3C3]' />
      </div>
      <div 
        className='flex justify-center mt-[334px] cursor-pointer'
        onClick={handleSignOut}
      >
        <ImExit className='text-[46px] text-white' />
      </div>
    </div>
  );
};

export default Sidebar;
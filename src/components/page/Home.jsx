import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import EmailVerify from './EmailVerify';
import { useNavigate } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';

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
            <div>
              <Sidebar />
            </div> : 
            <EmailVerify />
        }
    </div>
  )
}

export default Home
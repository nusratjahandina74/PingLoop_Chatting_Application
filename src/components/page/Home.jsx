import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Home = () => {
    const auth = getAuth();
    const data = useSelector(state=>(state.userInfo.value))
    console.log(data);
    const [verify, setVerify] = useState(false)
onAuthStateChanged(auth, (user) => {
  if (user && user.emailVerified) {
    setVerify(true)
    
  } 
});
    // if(data.emailVerified){
    //     setVerify(true)
    // }
    // useEffect(()=>{
    //  if(data.emailVerified){
    //     setVerify(true)
    //  }
    // },[])
    
  return (
    <div>
        {
            verify ?
            <p>Home</p> : 
            <div className='w-full h-screen bg-primary text-primary flex justify-center items-center font-open'> 
                <div className='bg-white py-10 px-2 w-[500px] rounded-lg'>
                      <h2 className='font-bold text-2xl text-center'>Please verify your email</h2>
                </div>
            </div>
        }
    </div>
  )
}

export default Home
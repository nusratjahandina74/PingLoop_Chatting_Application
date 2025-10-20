import React, { useState } from 'react'
import { Link } from 'react-router'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
// import { Bounce, ToastContainer, toast } from 'react-toastify';
const ForgotPassword = () => {
    const auth = getAuth();
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailError("");
    }
    const handleResetPassword = () => {
        if (!email) {
            setEmailError("Please enter your email address.");
        } else {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                setEmailError("You have entered an invalid email address!");

            }
        }
        if (email && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            sendPasswordResetEmail(auth, email)
                .then((user) => {
                    console.log(user);
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        }



        console.log("ok cool");

    }
    return (
        <div className='w-full h-screen bg-primary text-primary flex justify-center items-center font-open'>
            <div className='bg-white py-10 px-2 w-[500px] rounded-lg'>
                <h2 className='font-bold text-2xl text-center'>Forgot Password</h2>
                <div className='flex justify-center items-center'>
                    <div className='relative w-[368px] mt-[40px]'>
                        <p className='absolute top-[-10px] left-[0px] bg-white tracking-[2px] font-open font-semibold text-[13px] text-[#11175D]'>Email Address</p>
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmail}
                            className='w-full py-[20px] pr-[66px] border-b-2 border-[#11175D] rounded-[8px] outline-none' placeholder='Enter Your Email Address' />
                        <p className='font-secondary bg-red-500 px-2 rounded-[4px] mt-[5px] text-white text-[16px] font-medium text-center mx-auto'>{emailError}</p>
                    </div>
                </div>
                <div className='flex justify-center items-center mt-4'>
                    <button
                        onClick={handleResetPassword}
                        className='font-open font-semibold py-[10px] px-[20px] rounded-lg text-[16px]  text-white bg-primary relative cursor-pointer'>
                        <span className='z-[50]'>Reset Password</span>
                        <span className='absolute top-1/2 left-1/2 -translate-1/2 bg-[#5B36F5]/25 w-[78px] h-[28px] blur-[10px]'></span>
                    </button>
                    <Link
                        to="/login"
                        onClick={handleResetPassword}
                        className='font-open font-semibold py-[10px] px-[20px] rounded-lg text-[16px] ml-[10px] text-white bg-primary relative cursor-pointer'>
                        <span className='z-[50]'>Go Back</span>
                        <span className='absolute top-1/2 left-1/2 -translate-1/2 bg-[#5B36F5]/25 w-[78px] h-[28px] blur-[10px]'></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
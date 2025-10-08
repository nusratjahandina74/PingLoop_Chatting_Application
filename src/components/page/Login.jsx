import React from 'react'
import login from '../../assets/login.png'
import google_icon from '../../assets/google_icon.png'
const Login = () => {
    return (
        <div><div className='flex items-center'>
            <div className='w-1/2'>
                <div className='flex justify-end mr-[217px]'>
                    <div>
                        <h3 className='font-open font-bold text-[34px] text-[#11175D]'>Login to your account!</h3>
                        <button className='flex items-center font-open font-semibold text-[14px] mt-[29px] border border-[#808080] rounded-[16px] py-[23px] px-[42px]'><span><img src={google_icon} alt="#google_icon" /></span><span className='ml-[9px]'>Login with Google</span></button>
                        <div className='relative w-[368px] mt-[40px]'>
                            <p className='absolute top-[-10px] left-[0px] bg-white tracking-[2px] font-open font-semibold text-[13px] text-[#11175D]'>Email Address</p>
                            <input className='w-full py-[20px] pr-[66px] border-b-2 border-[#11175D] rounded-[8px] outline-none' type="email" placeholder='Enter Your Email Address' />
                        </div>
                        <div className='relative w-[368px] mt-[40px]'>
                            <p className='absolute top-[-10px] left-[0px] bg-white tracking-[2px] font-open font-semibold text-[13px] text-[#11175D]'>Password</p>
                            <input className='w-full py-[20px] pr-[66px] border-b-2 border-[#11175D] rounded-[8px] outline-none' type="text" placeholder='Enter Your Password' />
                        </div>
                        <div className='w-[368px] mt-[50px]'>
                            <button className='w-full font-open font-semibold py-[20px] px-[80px] rounded-[86px] text-[20px] text-white bg-primary relative'>
                                <span className='relative z-[50]'>Login to Continue</span>
                                <span className='absolute top-1/2 left-1/2 -translate-1/2 bg-[#5B36F5]/25 w-[78px] h-[28px] blur-[10px]'></span>
                            </button>
                            <p className='text-[#03014C] font-open text-[14px] text-center mt-[35px]'>Don’t have an account ? <span className='text-[#EA6C00] font-bold'>Sign Up</span></p>
                        </div>



                    </div>

                </div>
            </div>
            <div className='w-1/2'>
                <img className='h-screen w-full object-cover' src={login} alt="#login" />
            </div>
        </div></div>
    )
}

export default Login
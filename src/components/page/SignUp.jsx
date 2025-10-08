import React from 'react'
import sign_up from '../../assets/sign_up.png'
const SignUp = () => {
    return (
        <div className='flex items-center'>
            <div className='w-1/2'>
             <div className='flex justify-end mr-[70px]'>
                <div>
                       <h3 className='font-secondary font-bold text-[34px] text-[#11175D]'>Get started with easily register</h3>
                <p className='font-secondary text-[20px] text-[#808080] mt-[13px]'>Free register and you can enjoy it</p>
                <div className='relative w-[368px] mt-[53px]'>
                    <p className='absolute top-[-10px] left-[20px] bg-white px-[18px] tracking-[2px] font-secondary font-semibold text-[13px] text-[#11175D]'>Email Address</p>
                    <input className='w-full py-[20px] pr-[66px] pl-[38px] border-2 border-[#11175D] rounded-[8px]' type="email" placeholder='Email Address' />
                </div>
                <div className='relative w-[368px] mt-[53px]'>
                    <p className='absolute top-[-10px] left-[20px] bg-white px-[18px] tracking-[2px] font-secondary font-semibold text-[13px] text-[#11175D]'>Full Name</p>
                    <input className='w-full py-[20px] pr-[66px] pl-[38px] border-2 border-[#11175D] rounded-[8px]' type="text" placeholder='Full Name' />
                </div>
                <div className='relative w-[368px] mt-[53px]'>
                    <p className='absolute top-[-10px] left-[20px] bg-white px-[18px] tracking-[2px] font-secondary font-semibold text-[13px] text-[#11175D]'>Password</p>
                    <input className='w-full py-[20px] pr-[66px] pl-[38px] border-2 border-[#11175D] rounded-[8px]' type="text" placeholder='. . . . . . . . .' />
                </div> 
                    <div className='w-[368px] mt-[50px]'>
                    <button className='w-full font-secondary font-semibold py-[20px] px-[100px] rounded-[86px] text-[20px] text-white bg-primary relative'>
                        <span className='relative z-[50]'>Sign up</span>
                        <span className='absolute top-1/2 left-1/2 -translate-1/2 bg-[#5B36F5]/25 w-[78px] h-[28px] blur-[10px]'></span>
                    </button>
                    <p className='text-[#03014C] font-open text-[14px] text-center mt-[35px]'>Already  have an account ? <span className='text-[#EA6C00] font-bold'>Sign In</span></p>
                </div>

                    
              
                </div>
                 
             </div>
            </div>
            <div className='w-1/2'>
                <img className='h-screen w-full object-cover' src={sign_up} alt="#sign_up" />
            </div>
        </div>
    )
}

export default SignUp
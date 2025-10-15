import React, { useState } from 'react'
import sign_up from '../../assets/sign_up.png'
import { Link } from 'react-router'
import { FaEye, FaEyeSlash } from "react-icons/fa";
const SignUp = () => {
    const [email, setEmail] = useState("")
    const [fullName, setFullName] = useState("")
    const [password, setPassword] = useState("")

    const [emailError, setEmailError] = useState("")
    const [fullNameError, setFullNameError] = useState("")
    const [PasswordError, setPasswordError] = useState("")

    const [show, setShow] = useState(false)

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailError("");
    }


    const handleFullName = (e) => {
        setFullName(e.target.value);
        setFullNameError("");
    }


    const handlePassword = (e) => {
        setPassword(e.target.value)
        setPasswordError("")
    }


    const handleSignUp = () => {

        if (!email) {
            setEmailError("Please enter your email address.");
        } else {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                setEmailError("You have entered an invalid email address!");

            }
        }
        if (!fullName) {
            setFullNameError("Please enter your name.")
        }
        if (!password) {
            setPasswordError("Please enter a password.")
        }
        // else{
        //     if(!/^\S*$/.test(password)){
        //           setPasswordError("Password must not contain Whitespaces.")
        //     }else if(!/^(?=.*[A-Z]).*$/.test(password)){
        //         setPasswordError("Password must have at least one Uppercase Character.")
        //     }else if(!/^(?=.*[a-z]).*$/.test(password)){
        //         setPasswordError("Password must have at least one Lowercase Character.")
        //     }else if(!/^(?=.*[0-9]).*$/.test(password)){
        //         setPasswordError("Password must contain at least one Digit.")
        //     }else if(! /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(password)){
        //         setPasswordError("Password must contain at least one Special Symbol.")
        //     }else if(!/^.{8,}$/.test(password)){
        //         setPasswordError("Password must be 8 Characters.")
        //     }
        // }

        else {
            if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
                setPasswordError("Password must be a minimum of 8 characters including number, Upper, Lower And one special character")
            }
        }
    }
    console.log(email, fullName, password);

    return (
        <div className='flex items-center'>
            <div className='w-1/2'>
                <div className='flex justify-end mr-[70px]'>
                    <div>
                        <h3 className='font-secondary font-bold text-[34px] text-[#11175D]'>Get started with easily register</h3>
                        <p className='font-secondary text-[20px] text-[#808080] mt-[13px]'>Free register and you can enjoy it</p>
                        <div className='relative w-[368px] mt-[53px]'>
                            <p className='absolute top-[-10px] left-[20px] bg-white px-[18px] tracking-[2px] font-secondary font-semibold text-[13px] text-[#11175D]'>Email Address</p>
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmail}
                                className='w-full py-[20px] pr-[66px] pl-[38px] border-2 border-[#11175D] rounded-[8px]'  placeholder='Email Address' />
                            <p className='font-secondary bg-red-500 px-2 rounded-[4px] mt-[5px] text-white text-[16px] font-medium text-center mx-auto'>{emailError}</p>
                        </div>
                        <div className='relative w-[368px] mt-[53px]'>
                            <p className='absolute top-[-10px] left-[20px] bg-white px-[18px] tracking-[2px] font-secondary font-semibold text-[13px] text-[#11175D]'>Full Name</p>
                            <input
                                type="text"
                                onChange={handleFullName}
                                className='w-full py-[20px] pr-[66px] pl-[38px] border-2 border-[#11175D] rounded-[8px]'  placeholder='Full Name' />
                            <p className='font-secondary bg-red-500 px-2 rounded-[4px] mt-[5px] text-white text-[16px] font-medium text-center mx-auto'>{fullNameError}</p>

                        </div>
                        <div className='relative w-[368px] mt-[53px]'>
                            <p className='absolute top-[-10px] left-[20px] bg-white px-[18px] tracking-[2px] font-secondary font-semibold text-[13px] text-[#11175D]'>Password</p>
                            <input
                                type={show ? "text" : "password"}
                                onChange={handlePassword}
                                className='w-full py-[20px] pr-[66px] pl-[38px] border-2 border-[#11175D] rounded-[8px]' placeholder='Password' />
                                <div onClick={() =>setShow(!show)} className='absolute top-[40%] right-[10%]'>
                                    {
                                        show ? <FaEye /> : <FaEyeSlash />
                                    }
                                </div>
                            <p className='font-secondary bg-red-500 px-2 rounded-[4px] mt-[5px] text-white text-[16px] font-medium text-center mx-auto'>{PasswordError}</p>

                        </div>
                        <div className='w-[368px] mt-[50px]'>
                            <button
                                onClick={handleSignUp}
                                className='w-full font-secondary font-semibold py-[20px] px-[100px] rounded-[86px] text-[20px] text-white bg-primary relative cursor-pointer'>

                                <span className='z-[50]'>Sign up</span>
                                <span className='absolute top-1/2 left-1/2 -translate-1/2 bg-[#5B36F5]/25 w-[78px] h-[28px] blur-[10px]'></span>
                            </button>
                            <p className='text-[#03014C] font-open text-[14px] text-center mt-[35px]'>Already  have an account ? <Link to="/login"><span className='text-[#EA6C00] font-bold'>Sign In</span></Link></p>
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
import React, { useState } from 'react'
import login from '../../assets/login.png'
import google_icon from '../../assets/google_icon.png'
import { Link, useNavigate } from 'react-router'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { userInfo } from '../../slices/userSlice';
const Login = () => {
    const dispatch = useDispatch()
    const auth = getAuth();
    const navigate = useNavigate()
    const provider = new GoogleAuthProvider();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [emailError, setEmailError] = useState("")
    const [PasswordError, setPasswordError] = useState("")

    const [show, setShow] = useState(false)

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailError("");
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        setPasswordError("")
    }

    const handleLogin = () => {

        if (!email) {
            setEmailError("Please enter your email address.");
        }
        if (!password) {
            setPasswordError("Please enter a password.")
        }


        if (email && password && (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password))) {
            signInWithEmailAndPassword(auth, email, password)
                .then((user) => {
                    console.log(user, "login");
                    dispatch(userInfo(user))
                    localStorage.setItem("userInfo", JSON.stringify(user))
                    setTimeout(()=>{
                        navigate("/")
                    },2000)
                    toast.success("Login Successfully Done")

                })
                .catch((error) => {
                    const errorCode = error.code;
                    if (errorCode.includes("auth/invalid-credential")) {
                        toast.error("Please provide right email and password")
                    }
                })
        }
    };
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((user) => {
                console.log(user);
                
            }).catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                
            });
    }
// const handleGoogleSignIn = () => {
//     signInWithPopup(auth, provider)
//         .then((result) => {
//             console.log("Google Success:", result.user);
//         })
//         .catch((error) => {
//             console.log("Google Error:", error);
//             toast.error(error.message);
//         });
// };

    return (
        <div><div className='flex items-center'>
            <div className='w-1/2'>
                <div className='flex justify-end mr-[217px]'>
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                        transition={Bounce}
                    />
                    <div>
                        <h3 className='font-open font-bold text-[34px] text-[#11175D]'>Login to your account!</h3>
                        <button
                            onClick={handleGoogleSignIn}
                            className='flex items-center font-open font-semibold text-[14px] mt-[29px] border border-[#808080] rounded-[16px] py-[23px] px-[42px]'><span><img src={google_icon} alt="#google_icon" /></span><span className='ml-[9px]'>Login with Google</span></button>
                        <div className='relative w-[368px] mt-[40px]'>
                            <p className='absolute top-[-10px] left-[0px] bg-white tracking-[2px] font-open font-semibold text-[13px] text-[#11175D]'>Email Address</p>
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmail}
                                className='w-full py-[20px] pr-[66px] border-b-2 border-[#11175D] rounded-[8px] outline-none' placeholder='Enter Your Email Address' />
                            <p className='font-secondary bg-red-500 px-2 rounded-[4px] mt-[5px] text-white text-[16px] font-medium text-center mx-auto'>{emailError}</p>
                        </div>
                        <div className='relative w-[368px] mt-[40px]'>
                            <p className='absolute top-[-10px] left-[0px] bg-white tracking-[2px] font-open font-semibold text-[13px] text-[#11175D]'>Password</p>
                            <input
                                type={show ? "text" : "password"}
                                onChange={handlePassword}
                                className='w-full py-[20px] pr-[66px] border-b-2 border-[#11175D] rounded-[8px] outline-none' placeholder='Enter Your Password' />
                            <div onClick={() => setShow(!show)} className='absolute top-[40%] right-[10%]'>
                                {
                                    show ? <FaEye /> : <FaEyeSlash />
                                }
                            </div>
                            <p className='font-secondary bg-red-500 px-2 rounded-[4px] mt-[5px] text-white text-[16px] font-medium text-center mx-auto'>{PasswordError}</p>
                        </div>
                        <div className='w-[368px] mt-[50px]'>
                            <button
                                onClick={handleLogin}
                                className='w-full font-open font-semibold py-[20px] px-[80px] rounded-[86px] text-[20px] text-white bg-primary relative cursor-pointer'>
                                <span className='z-[50]'>Login to Continue</span>
                                <span className='absolute top-1/2 left-1/2 -translate-1/2 bg-[#5B36F5]/25 w-[78px] h-[28px] blur-[10px]'></span>
                            </button>
                            <Link to="/forgotpassword"><p className='text-[#EA6C00] font-medium font-open text-[14px] text-center mt-[20px] cursor-pointer '>Forgot Password</p></Link>
                            <p className='text-[#03014C] font-open text-[14px] text-center mt-[10px]'>Don’t have an account ? <Link to="/signup"><span className='text-[#EA6C00] font-bold'>Sign Up</span></Link> </p>
                        </div>



                    </div>

                </div>
            </div>
            <div className='w-1/2'>
                <img className='h-screen w-full object-cover overflow-hidden' src={login} alt="#login" />
            </div>
        </div></div>
    )
}

export default Login
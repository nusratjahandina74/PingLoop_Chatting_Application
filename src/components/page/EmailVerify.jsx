import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'

const EmailVerify = () => {
    const data = useSelector(state=>(state.userInfo.value))
    return (

        <div className='w-full h-screen bg-primary text-primary flex justify-center items-center font-open text-center'>
            <div className='bg-white py-10 px-2 w-[500px] rounded-lg '>
                <h2 className='font-bold text-3xl text-center mb-[20px]'>Please verify this email {data.email}</h2>
                <Link
                        to="/login"
                        className='font-open font-semibold py-[10px] px-[20px] rounded-lg text-[16px] ml-[10px] text-white bg-primary cursor-pointer '>
                       Go Back to Login
                        
                    </Link>
            </div>
        </div>

    )
}

export default EmailVerify
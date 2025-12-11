import React, { useEffect, useState } from 'react'
import profile from "../../assets/profile.png"
import { PiPencilSimpleLineFill } from "react-icons/pi";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { RiImageAddFill } from "react-icons/ri";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, updateProfile } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { statusUpdate, userNameUpdate } from '../../slices/userSlice';
const ProfileSetting = () => {
    const data = useSelector((selector) => selector?.userInfo?.value?.user)
    const [show, setShow] = useState(false)
    const [showStatus, setShowStatus] = useState(false)
    const [showDisplayName, setShowDisplayName] = useState("")
    const [showEditStatus, setShowEditStatus] = useState("")
    const auth = getAuth();
    const db = getDatabase();
    const dispatch = useDispatch()
    useEffect(() => {
        if (!data) {
            const storedData = localStorage.getItem("userInfo");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            dispatch(userNameUpdate(parsedData.user.displayName));
            dispatch(statusUpdate(parsedData.user.status || ""));
        }
        }
    }, [data, dispatch])
    useEffect(() => {
        setShowDisplayName(data?.displayName || "")
    }, [data])
    const handleEditNameShow = () => {
        setShow(!show)
    }
 const handleEditName = () => {
        if (!auth.currentUser) return;
        updateProfile(auth.currentUser, {
            displayName: showDisplayName
        })
        .then(() => {
            set(ref(db, "users/" + data.uid), {
                username: showDisplayName,
                email: data.email,
            });
        })
        .then(() => {
            dispatch(userNameUpdate(showDisplayName));
            setShow(false);
            localStorage.setItem("userInfo", JSON.stringify({
                user: {
                    ...data,
                    displayName: showDisplayName
                }
            }));
        })
        .catch((error) => {
            console.log(error);
        });
    };
    const handleProfileStatus = ()=>{
        setShowStatus(!showStatus)
    }
    const handleEditStatus = () => {
    if (!auth.currentUser) return;
    set(ref(db, "users/" + data.uid + "/status"), showEditStatus)
    .then(() => {
        dispatch(statusUpdate(showEditStatus));
        localStorage.setItem("userInfo", JSON.stringify({
            user: {
                ...data,
                status: showEditStatus
            }
        }));
        setShowStatus(false);
    })
    .catch((error) => console.log(error));
};
;
    return (
        <div className='shadow font-primary px-[42px] py-[26px] rounded-[20px]'>
            <div className='border-b pb-[29px] border-[#000000]/25'>
                <h2 className='font-semibold text-[20px] text-[#000000]'>Profile Settings</h2>
                <div className='flex items-center gap-x-[31px] mt-[49px]'>
                    <img src={profile} alt="profile" />
                    <div>
                        <h4 className='font-semibold text-[25px]'>{data?.displayName}</h4>
                        <p className='text-[20px]'>{data?.status || "Stay Home Stay Safe"}</p>
                    </div>
                </div>
            </div>
            <div className='ml-[40px] mt-[43px]'>
                <div className='flex items-center gap-x-[36px] mb-[20px]'>
                    <PiPencilSimpleLineFill className='text-[25px]' />
                    <p onClick={handleEditNameShow} className='text-[20px] cursor-pointer'>
                        Edit Profile Name.
                    </p>
                </div>
                {show && (
                    <div className='flex items-center'>
                        <input
                            type='text'
                            value={showDisplayName}
                            onChange={(e) => setShowDisplayName(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleEditName()}
                            placeholder={data?.displayName}
                            className='border w-[250px] px-[5px] py-[10px]'
                        />
                        <button
                            onClick={handleEditName}
                            className='bg-primary text-[20px] text-white px-3 py-2 rounded ml-[5px]'>
                            Submit
                        </button>
                    </div>
                )}
                <div className='flex items-center gap-x-[36px] mb-[20px]'>
                    <IoChatbubbleEllipses className='text-[25px]' />
                    <p 
                    onClick={handleProfileStatus}
                    className='text-[20px]'>Edit Profile Status Info.</p>
                </div>
                   {showStatus && (
                    <div className='flex items-center'>
                        <input
                            type='text'
                            value={showEditStatus}
                            onChange={(e) => setShowEditStatus(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleEditStatus()}
                            placeholder={data?.status}
                            className='border w-[250px] px-[5px] py-[10px]'
                        />
                        <button
                            onClick={handleEditStatus}
                            className='bg-primary text-[20px] text-white px-3 py-2 rounded ml-[5px]'>
                            Submit
                        </button>
                    </div>
                )}
                <div className='flex items-center gap-x-[36px] mb-[20px]'>
                    <RiImageAddFill className='text-[25px]' />
                    <p className='text-[20px]'>Edit Profile Photo.</p>
                </div>
                <div className='flex items-center gap-x-[36px]'>
                    <RxQuestionMarkCircled className='text-[25px]' />
                    <p className='text-[20px]'>Help.</p>
                </div>
            </div>

            <div className='mt-[280px] text-center'>
                <p className='text-[20px] text-[#000000]/50'>Chat App</p>
            </div>
        </div>
    )
}

export default ProfileSetting;

import React, { useEffect } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import friends1 from '../../assets/friends1.png'
import { useState } from 'react'
import { getDatabase, onValue, ref, } from 'firebase/database';
import { useDispatch, useSelector } from 'react-redux';
import { activeInfo } from '../../slices/activeSlice';
const FriendsMessage = () => {
    const db = getDatabase();
    const dispatch = useDispatch()
    const data = useSelector((selector) => (selector?.userInfo?.value?.user))
    console.log(data?.uid, "friendData");
    const [friendList, setfriendList] = useState([])
    useEffect(() => {
        const friendRef = ref(db, "friend");
        onValue(friendRef, (snapshot) => {
            const arr = [];
            snapshot.forEach((item) => {

                if (data?.uid === item.val().receiverId || data?.uid === item.val().senderId) {
                    arr.push({ ...item.val(), key: item.key });
                }
            });
            setfriendList(arr);
        });
    }, []);
const handleMessage = (item) => {
    if (data.uid === item.senderId) {
        dispatch(activeInfo({
            name: item.receiverName,
            id: item.receiverId
        }))
    } else {
        dispatch(activeInfo({
            name: item.senderName,
            id: item.senderId
        }))
    }
}
    return (
        <div className='shadow-lg rounded-lg px-5 py-3 font-primary text-primary'>
            <div className='flex justify-between items-center'>
                <h3 className='font-semibold text-[20px]'>Friends</h3>
                <BsThreeDotsVertical className='text-[20px]' />
            </div>
            <div className='px-2 h-[400px] overflow-y-scroll custom-scrollbar'>
                {
                    friendList.map((item) => (
                        <div
                            className='flex justify-between items-center mt-[17px] border-b-2 border-[#b0a9a9] pb-[10px]'>
                            <div className='flex items-center'>
                                <img src={friends1} alt="#friends1" />
                                <div className='ml-[14px]'>
                                    <h4 className='font-semibold text-[14px]'>
                                        {
                                            data?.uid == item.receiverId ? item.senderName : item.receiverName
                                        }

                                    </h4>
                                    <p className='font-medium text-[12px] text-[#4D4D4D]'>Dinner?</p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <button
                                    onClick={() => handleMessage(item)}
                                    className='font-semibold text-[20px] text-[#FFFFFF] bg-primary px-[8px] 
        rounded-[5px] mr-[20px]'> Message </button>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
export default FriendsMessage
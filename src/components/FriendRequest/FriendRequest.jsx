import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import friends1 from '../../assets/friends1.png'
import { getDatabase, onValue, ref} from "firebase/database";
import { useSelector } from 'react-redux';
const FriendRequest = () => {
const data = useSelector((selector) => (selector.userInfo.value.friendRequest))
  console.log(data?.uid, "loginData");
  const db = getDatabase();
  const [friendRequest, setfriendRequest] = useState([])
  useEffect(() => {
    const userRef = ref(db, "friendRequest")
    onValue(userRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
          arr.push(item.val())
      })
      setfriendRequest(arr);

    })
  }, [])
  console.log(friendRequest);
  return (
    <div className='shadow-lg rounded-lg px-5 py-3 font-primary text-primary mt-10'>
      <div className='flex justify-between items-center'>
        <h3 className='font-semibold text-[20px]'>Friend Request</h3>
        <BsThreeDotsVertical className='text-[20px]' />
      </div>
     <div className='px-2 h-[400px] overflow-y-scroll custom-scrollbar'>
       {
        friendRequest.map((friendRequest) =>(
          <div className='flex justify-between items-center mt-[17px] border-b-2 border-[#b0a9a9] pb-[10px]'>
        <div className='flex items-center'>
          <img src={friends1} alt="#friends1" />
          <div className='ml-[14px]'>
        <h4 className='font-semibold text-[18px]'>{friendRequest.senderName}</h4>
        
      </div>
      </div>
      <button className='font-semibold text-[20px] text-[#FFFFFF] bg-primary px-[8px] rounded-[5px] mr-[20px]'>
        Accept
      </button>
    </div>
        ))
       }

     
   
     </div>
     
     
    </div>
  )
}




export default FriendRequest
import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import friends4 from '../../assets/friends4.png'
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useSelector } from 'react-redux';
const UserList = () => {
  const data = useSelector((selector) => (selector?.userInfo?.value?.user))
  console.log(data?.uid, "loginData");
  const db = getDatabase();
  const [userList, setUserList] = useState([])
  useEffect(() => {
    const userRef = ref(db, "users")
    onValue(userRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        if (data?.uid !== item.key) {
          arr.push({ ...item?.val(), userid: item.key })
        }
      })
      setUserList(arr);
    })
  }, [])
  console.log(userList);
  const handleFriendRequest = (item) => {
    console.log("ok", item);
    set(push(ref(db, 'friendRequest/')), {
      senderName: data.displayName,
      senderId: data.uid,
      receiverName: item.username,
      receiverId: item.userid
    });
  }

  const [friendRequest, setfriendRequest] = useState([])
  useEffect(() => {
    const friendrequestRef = ref(db, "friendRequest")
    onValue(friendrequestRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {

        arr.push(item.val().receiverId + item.val().senderId)

      })
      setfriendRequest(arr);
    })
  }, [])
  console.log(friendRequest);

  return (
    <div className='shadow-lg rounded-lg px-5 py-3 font-primary text-primary'>
      <div className='flex justify-between items-center'>
        <h3 className='font-semibold text-[20px]'>User List</h3>
        <BsThreeDotsVertical className='text-[20px]' />
      </div>
      <div className='px-2 h-[400px] overflow-y-scroll custom-scrollbar'>
        {
          userList.map((user) => (
            <div className='flex justify-between items-center mt-[17px] border-b-2 border-[#b0a9a9] pb-[10px]'>
              <div className='flex items-center'>
                <img src={friends4} alt="#friends4" />
                <div className='ml-[14px]'>
                  <h4 className='font-semibold text-[14px]'>{user.username}</h4>
                  <p className='font-medium text-[10px] text-[#4D4D4D]'>{user.email}</p>
                </div>
              </div>
              {
                friendRequest.includes(data?.uid + user.userid) ||
                  friendRequest.includes(user.userid + data?.uid)
                  ?
                  <button
                    className='font-semibold text-[20px] text-[#FFFFFF] bg-primary px-[8px] rounded-[5px] mr-[20px] cursor-pointer'>
                    -
                  </button> 
                   :
                  <button
                    onClick={() => handleFriendRequest(user)}
                    className='font-semibold text-[20px] text-[#FFFFFF] bg-primary px-[8px] rounded-[5px] mr-[20px] cursor-pointer'>
                    +
                  </button>
              }

            </div>
          ))
        }
      </div>
    </div>
  )
}


export default UserList
import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import friends4 from '../../assets/friends4.png'
import { getDatabase, onValue, ref } from "firebase/database";
import { getAuth } from "firebase/auth";
const UserList = () => {
  const db = getDatabase();
  const auth = getAuth();
  const [userList, setUserList] = useState([])
  useEffect(() => {
    const userRef = ref(db, "users")
    onValue(userRef, (snapshot) => {
      let arr = []
      const currentUser = auth.currentUser;
      snapshot.forEach((item) => {
        const userData = item.val();
       if (userData.uid !== currentUser?.uid) {
          arr.push(userData);
        }
      })
      setUserList(arr);

    })
  },[])
  console.log(userList);

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
              <button className='font-semibold text-[20px] text-[#FFFFFF] bg-primary px-[8px] rounded-[5px] mr-[20px]'>
                +
              </button>
            </div>

          ))
        }


      </div>


    </div>
  )
}


export default UserList
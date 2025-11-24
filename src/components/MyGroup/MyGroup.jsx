import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import friends1 from '../../assets/friends1.png'
import { getDatabase, onValue, ref } from 'firebase/database';
import { useSelector } from 'react-redux';
const MyGroup = () => {
  const data = useSelector((selector) => (selector?.userInfo?.value?.user))
  console.log(data?.uid, "friendData");
  const [mygroup, setMyGroup] = useState([])
  const db = getDatabase();
  useEffect(() => {
    const groupListRef = ref(db, "groupList");
    onValue(groupListRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {

        if (item.val().groupCreator == data.uid) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setMyGroup(arr);
    });
  }, [])
  console.log(mygroup);
  return (
    <div className='shadow-lg rounded-lg px-5 py-3 font-primary text-primary mt-10'>
      <div className='flex justify-between items-center'>
        <h3 className='font-semibold text-[20px]'>My Groups</h3>
        <BsThreeDotsVertical className='text-[20px]' />
      </div>
      <div className='px-2 h-[400px] overflow-y-scroll custom-scrollbar'>
        {
          mygroup.map((item) => (
            <div className='flex justify-between items-center mt-[17px] border-b-2
             border-[#b0a9a9] pb-[10px]'>
              <div className='flex items-center'>
                <img src={friends1} alt="#friends1" />
                <div className='ml-[14px]'>
                  <h4 className='font-semibold text-[14px]'>{item.groupName}</h4>
                  <p className='font-medium text-[12px] text-[#4D4D4D]'>{item.groupTagline}</p>
                </div>
              </div>
              <p className='font-medium text-[12px] text-[#4D4D4D]'>Today, 8:56pm</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default MyGroup
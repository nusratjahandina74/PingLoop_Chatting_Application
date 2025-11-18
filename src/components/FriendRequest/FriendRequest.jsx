import React, { useEffect, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import friends1 from '../../assets/friends1.png';
import { getDatabase, onValue, ref, set, remove } from 'firebase/database';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addFriend } from '../../slices/userSlice';
const FriendRequest = () => {
  const data = useSelector((selector) => selector?.userInfo?.value?.user);
  const db = getDatabase();
   const dispatch = useDispatch();
  const [friendRequests, setFriendRequests] = useState([]);
   
  useEffect(() => {
    const friendrequestRef = ref(db, 'friendRequest');
    onValue(friendrequestRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (data.uid === item.val().receiverId) {
          arr.push({ ...item.val(), id: item.key });
        }
      });
      setFriendRequests(arr);
    });
  }, [data.uid, db]); 

  const handleFriend = async (item) => {
    try {
       await set(ref(db, `friends/${item.receiverId}/${item.senderId}`), {
        receiverName: item.receiverName,
        receiverId: item.receiverId,
        senderName: item.senderName,
        senderId: item.senderId,
      });

      await set(ref(db, `friends/${item.senderId}/${item.receiverId}`), {
        receiverName: item.receiverName,
        receiverId: item.receiverId,
        senderName: item.senderName,
        senderId: item.senderId,
      });
      await remove(ref(db, `friendRequest/${item.id}`));
       dispatch(addFriend(item));
      setFriendRequests((prevRequests) =>
        prevRequests.filter((request) => request.id !== item.id)
      );
    } catch (error) {
      console.error('Problem', error);
    }
  };

  return (
    <div className='shadow-lg rounded-lg px-5 py-3 font-primary text-primary mt-10'>
      <div className='flex justify-between items-center'>
        <h3 className='font-semibold text-[20px]'>Friend Request</h3>
        <BsThreeDotsVertical className='text-[20px]' />
      </div>
      <div className='px-2 h-[400px] overflow-y-scroll custom-scrollbar'>
        {friendRequests.length > 0 ? (
          friendRequests.map((item) => (
            <div
              key={item.id}
              className='flex justify-between items-center mt-[17px] border-b-2 border-[#b0a9a9] pb-[10px]'
            >
              <div className='flex items-center'>
                <img src={friends1} alt='#friends1' />
                <div className='ml-[14px]'>
                  <h4 className='font-semibold text-[18px]'>
                    {item.senderName}
                  </h4>
                  <p className='font-medium text-[14px] text-[#4D4D4D]'>
                    Today, 8:56pm
                  </p>
                </div>
              </div>
              <div className='flex items-center'>
                <button
                  onClick={() => handleFriend(item)}
                  className='font-semibold text-[20px] text-[#FFFFFF] bg-primary px-[8px] rounded-[5px] mr-[20px]'
                >
                  Accept
                </button>
              </div>
            </div>
          ))
        ) : (
          <p ></p>
        )}
      </div>
    </div>
  );
};

export default FriendRequest;


import React, { useEffect, useState } from 'react'
import grouplist1 from '../../assets/grouplist1.png'
import { getDatabase, onValue, push, ref, set } from 'firebase/database';
import { useSelector } from 'react-redux';
import { Bounce, ToastContainer, toast } from 'react-toastify';
const GroupList = () => {
  const data = useSelector((selector) => (selector?.userInfo?.value?.user))
  console.log(data?.uid, "friendData");
  const [groupName, setGroupName] = useState("");
  const [groupTagline, setGroupTagline] = useState("");
  const [groupNameError, setGroupNameError] = useState("")
  const [groupTaglineError, setGroupTaglineError] = useState("")
  const [groupList, setGroupList] = useState([])
  const [show, setShow] = useState(false)
  const db = getDatabase();
  const handleGroup = () => {
    setShow(!show)
  }
  const handleCreateGroup = () => {
    console.log(groupName);
    console.log(groupTagline);
    if (!groupName) {
      setGroupNameError("Please Add a Group Name");

    }
    if (!groupTagline) {
      setGroupTaglineError("Please Add a Group Tagline");

    }
    if (groupName && groupTagline) {
      set(push(ref(db, "groupList/")), {
        groupName: groupName,
        groupTagline: groupTagline,
        groupCreator: data?.uid
      }).then(() => {
        toast.success("Group Created Successfully!");
        setGroupName("");
        setGroupTagline("");
        setTimeout(() => {
          setShow(false);
        }, 3000);
      });
    }

  }
  useEffect(() => {
    const groupListRef = ref(db, "groupList");
    onValue(groupListRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {

        if (item.val().groupCreator != data.uid) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setGroupList(arr);
    });
  }, [])
  console.log(groupList);
  return (
    <div className='shadow-lg rounded-lg px-5 py-3 font-primary text-primary relative'>
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

      <div className='flex justify-between items-center'>
        <h3 className='font-semibold text-[20px]'>Groups List</h3>
        {/* {
          show ?
            <button
              onClick={handleGroup}
              className='font-semibold text-[20px] text-white bg-primary 
              px-[18px] rounded-[5px] py-1'>Go Back</button>
            : */}
            <button
              onClick={handleGroup}
              className='font-semibold text-[20px] text-white bg-primary 
              px-[18px] rounded-[5px] py-1'>Create Group</button>
       {/* } */}
      </div>
      {!show && (
        <div className='px-2 h-[400px] overflow-y-scroll custom-scrollbar'>
          <div>
            {
              groupList.map((item) => (
                <div className='flex justify-between items-center mt-4 border-b-2
                 border-[#b0a9a9] pb-3'>
                  <div className='flex items-center'>
                    <img src={grouplist1} alt="#grouplist1" />
                    <div className='ml-3'>
                      <h4 className='font-semibold text-[18px]'>{item.groupName}</h4>
                      <p className='font-medium text-[14px] text-gray-600'>{item.groupTagline}</p>
                    </div>
                  </div>
                  <button className='font-semibold text-[20px] text-white bg-primary px-5 
                  rounded-[5px]'>
                    Join
                  </button>
                </div>
              ))

            }
          </div>

        </div>
      )}
      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 font-secondary">
          <div className="bg-white p-[40px] rounded-lg w-[400px]">
            <h2 className="text-[35px] font-bold mb-4 mx-auto text-center">Create New Group</h2>
            <input
              onChange={(e) => {
                setGroupName(e.target.value);
                setGroupNameError("");
              }}
              type="text"
              placeholder="Group Name"
              className="w-full border-2 p-3 rounded-lg mb-1"
            />
            <p className='font-secondary mb-[2px] font-semibold
              text-red-500 text-[18px] text-center mx-auto'>{groupNameError}</p>
            <input
              onChange={(e) => {
                setGroupTagline(e.target.value);
                setGroupTaglineError("");
              }}
              type="text"
              placeholder="Group Tagline"
              className="w-full border-2 p-3 rounded-lg mb-1"
            />
            <p className='font-secondary mb-[2px]
              text-red-500 text-[18px] font-semibold text-center mx-auto'>{groupTaglineError}</p>
            <div className="flex justify-center gap-5">
              <button
                onClick={() => setShow(false)}
                className="px-4 py-1 bg-gray-400 text-white rounded text-[18px]"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateGroup}
                className="px-4 py-1 bg-primary text-white rounded text-[18px]">
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default GroupList

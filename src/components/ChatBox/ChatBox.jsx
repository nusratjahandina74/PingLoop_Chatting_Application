import React from 'react'
import friends1 from "../../assets/friends1.png"
const ChatBox = () => {
  return (
    <div className='shadow-lg font-primary'>
      <div className='flex items-center'>
          <div>
            <img src={friends1} alt="#friends1" />
        </div>
        <div>
            <h4>Swathi </h4>
            <p>Online</p>
        </div>
      </div>
        </div>
  )
}

export default ChatBox
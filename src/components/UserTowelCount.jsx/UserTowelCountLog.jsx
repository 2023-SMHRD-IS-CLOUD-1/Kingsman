import React from 'react'
import { useNavigate } from 'react-router-dom';


const UserTowelCountLog = () => {
  const nav = useNavigate();
  return (
    <div className='userActivity' onClick={()=>{nav('/UserActivityLog')}}>
      <h3>
        활동 기록
      </h3>
    </div>
  )
}

export default UserTowelCountLog
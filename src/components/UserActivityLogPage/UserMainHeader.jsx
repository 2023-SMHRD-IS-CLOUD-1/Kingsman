import React, { useEffect, useState } from 'react'
import profileIcon from '../../image/profile.png'
import { useNavigate } from 'react-router-dom'

const UserMainHeader = () => {
    const nav = useNavigate();
    
    const [isTooltipVisible, setTooltipVisible] = useState(false);

    const handleIconClick = () => {
        setTooltipVisible(!isTooltipVisible);
       
    }   

  return (
    <div >
       
        <div className="UserHeader">
            
            <h3 onClick={() =>{
                nav('/UserTowelCount')}} style={{width:"80%"}}>title</h3>
            <div>
                <img onClick={handleIconClick} src={profileIcon}/>
            </div>
        </div>
        
        {isTooltipVisible && <div className="tooltip3">

                <button onClick={()=>{nav('/UserActivityLog')}}>내 활동 기록</button>
                <button onClick={()=>{nav('/UserModifyProfile')}}>회원 정보 수정</button>
                <button onClick={()=>{nav('/Login')}}>로그아웃</button>
            </div>}
    </div>
  )
}

export default UserMainHeader
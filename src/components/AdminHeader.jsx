import React, { useEffect, useState } from 'react'
import menuIcon from '../image/menu.png'
import profileIcon from '../image/profile.png'
import bellIcon from '../image/notification.png'
import { useNavigate } from 'react-router-dom'


const AdminHeader = () => {

    const nav = useNavigate();

    const [isMenuOpen, setMenuOpen] = useState(false);

    const [isTooltipVisible, setTooltipVisible] = useState(false);
    
    const [isTooltipVisible2, setTooltipVisible2] = useState(false);

    const [notificationCount, setNotificationCount] = useState(0);


    // 나중에 알림 뜨면 숫자
    useEffect(() => {
       //실시간으로 데이터를 가져오는 함수 추가해야 함
        const intervalId = setInterval(() => {
        setNotificationCount(prevCount => prevCount + 1);
        });

        return () => clearInterval(intervalId);
    }, []);

    const handleIconClick = () => {
        setTooltipVisible(!isTooltipVisible);
        isTooltipVisible2 && setTooltipVisible2(!isTooltipVisible2);
        setNotificationCount(0);
    }
    const handleIconClick2 = () => {
        setTooltipVisible2(!isTooltipVisible2);
        isTooltipVisible && setTooltipVisible(!isTooltipVisible);
    }   

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
  return (
    <div >
        {notificationCount > 0 && (
        <div className="notification">
          <h6>notificationCount</h6>
        </div>
      )}
        <div className="AdminHeader">
            <img className='menu-button' onClick={toggleMenu} src={menuIcon}/>
            <h3 onClick={() =>{
                nav('/AdminHome')}}>title</h3>
            <div>
                <img onClick={handleIconClick} src={bellIcon}/>
                <img onClick={handleIconClick2} src={profileIcon}/>
            </div>
        </div>
        <div className={`${isMenuOpen ? 'menu-open' : 'menu-close'}`}>
           
            <div onClick={()=>{nav('/Dashboard')}}>대시보드</div>
            <div onClick={()=>{nav('/PromotionalText')}}>홍보 문구</div>
            <div onClick={()=>{nav('/UserManagement')}}>사용자 관리</div>
            <div onClick={()=>{nav('/ScheduleManagement')}}>일정 관리</div>
            <div onClick={()=>{nav('/AllActivitiLog')}}>활동 기록</div>
            <div onClick={()=>{nav('/TowelCount')}}>수건 수량 확인</div>
            
        </div>
        {isTooltipVisible && <div className="tooltip">
                <button onClick={()=>{nav('/AllActivitiLog')}}>전체 로그</button>
            </div>}
        {isTooltipVisible2 && <div className="tooltip2">

                <button onClick={()=>{nav('/AdminModifyProfile')}}>회원 정보 수정</button>
                <button onClick={()=>{nav('/Login')}}>로그아웃</button>
            </div>}
    </div>
  )
}

export default AdminHeader
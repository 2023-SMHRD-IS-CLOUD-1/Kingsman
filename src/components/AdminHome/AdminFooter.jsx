import React from 'react'
import graphIcon from '../../image/graph.png'
import promotionIcon from '../../image/promotion.png'
import editIcon from '../../image/edit.png'
import scheduleIcon from '../../image/schedule.png'
import logIcon from '../../image/log.png'
import graphGrayIcon from '../../image/graphGray.png'
import promotionGrayIcon from '../../image/promotionGray.png'
import editGrayIcon from '../../image/editGray.png'
import scheduleGrayIcon from '../../image/scheduleGray.png'
import logGrayIcon from '../../image/logGray.png'

import { useLocation, useNavigate } from 'react-router-dom'

const AdminFooter = () => {
    const nav = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    
  return (
    <div className= {currentPath === '/PromotionalTextData'? 'AdminFooter blue':'AdminFooter'}>
        <div onClick={()=>{nav('/Dashboard')}}>
          {currentPath === '/Dashboard'?
          <img src= {graphIcon}></img>:
          <img src= {graphGrayIcon}></img>}
          <p className= {currentPath === '/Dashboard'? 'black':'gray'}>대시보드</p>
        </div>
        <div onClick={()=>{nav('/PromotionalText')}}>
           {(currentPath === '/PromotionalText'||currentPath === '/PromotionalTextData')?
          <img src= {promotionIcon}></img>:
          <img src= {promotionGrayIcon}></img>}
          <p className= {currentPath === '/PromotionalText'? 'black':'gray'}>홍보문구</p>
          </div>
        <div onClick={()=>{nav('/UserManagement')}}>
          {(currentPath === '/UserManagement'|| currentPath ==='/UserModify')?
          <img src= {editIcon}></img>:
          <img src= {editGrayIcon}></img>}
          <p className= {currentPath === '/UserManagement'? 'black':'gray'}>사용자관리</p>
          </div>
        <div onClick={()=>{nav('/ScheduleManagement')}}>
          {currentPath === '/ScheduleManagement'?
          <img src= {scheduleIcon}></img>:
          <img src= {scheduleGrayIcon}></img>}
          <p className= {currentPath === '/ScheduleManagement'? 'black':'gray'}>일정관리</p>
          </div>
        <div onClick={()=>{nav('/AllActivitiLog')}}>
          {currentPath === '/AllActivitiLog'?
          <img src= {logIcon}></img>:
          <img src= {logGrayIcon}></img>}
          <p className= {currentPath === '/AllActivitiLog'? 'black':'gray'}>활동기록</p>
        </div>


    </div>
  )
}

export default AdminFooter
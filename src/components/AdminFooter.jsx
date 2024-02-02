import React from 'react'
// import homeIcon from '../image/home.png'
import graphIcon from '../image/graph.png'
import promotionIcon from '../image/promotion.png'
import editIcon from '../image/edit.png'
import scheduleIcon from '../image/schedule.png'
import logIcon from '../image/log.png'
import graphGrayIcon from '../image/graphGray.png'
import promotionGrayIcon from '../image/promotionGray.png'
import editGrayIcon from '../image/editGray.png'
import scheduleGrayIcon from '../image/scheduleGray.png'
import logGrayIcon from '../image/logGray.png'

// import uploadIcon from '../image/upload.png'
import { useLocation, useNavigate } from 'react-router-dom'

const AdminFooter = () => {
    const nav = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    
  return (
    <div className='AdminFooter'>
        <div onClick={()=>{nav('/Dashboard')}}>
          {currentPath === '/Dashboard'?
          <img src= {graphIcon}></img>:
          <img src= {graphGrayIcon}></img>}
        </div>
        <div onClick={()=>{nav('/PromotionalText')}}>
           {currentPath === '/PromotionalText'?
          <img src= {promotionIcon}></img>:
          <img src= {promotionGrayIcon}></img>}
          </div>
        <div onClick={()=>{nav('/UserManagement')}}>
          {currentPath === '/UserManagement'?
          <img src= {editIcon}></img>:
          <img src= {editGrayIcon}></img>}
          </div>
        {/* <div onClick={()=>{nav('/AdminHome')}}><img src= {homeIcon}></img></div> */}
        <div onClick={()=>{nav('/ScheduleManagement')}}>
          {currentPath === '/ScheduleManagement'?
          <img src= {scheduleIcon}></img>:
          <img src= {scheduleGrayIcon}></img>}
          </div>
        <div onClick={()=>{nav('/AllActivitiLog')}}>
          {currentPath === '/AllActivitiLog'?
          <img src= {logIcon}></img>:
          <img src= {logGrayIcon}></img>}
        </div>
        {/* <div onClick={()=>{nav('/TowelCount')}}><img src= {uploadIcon}></img></div> */}
        


    </div>
  )
}

export default AdminFooter
import React from 'react'
import AdminFooter from './AdminFooter'
import AdminHeader from './AdminHeader.tsx'
import { useNavigate } from 'react-router-dom';
import graphIcon from '../../image/graph.png'
import promotionIcon from '../../image/promotion.png'
import editIcon from '../../image/edit.png'
import scheduleIcon from '../../image/schedule.png'
import logIcon from '../../image/log.png'
import uploadIcon from '../../image/upload.png'

const AdminHome = () => {
  const nav = useNavigate();
  return (
    <div>
        <AdminHeader></AdminHeader>
        <div className='AdminHome'>
          <div>
            <div onClick={()=>{nav('/Dashboard')}}>
              <img src= {graphIcon}></img>
              <p>대시보드</p>
            </div>
            <div onClick={()=>{nav('/PromotionalText')}}>
              <img src= {promotionIcon}></img>
              <p>홍보 문구</p>
            </div>
          </div>
          <div>
            <div onClick={()=>{nav('/UserManagement')}}>
              <img src= {editIcon}></img>
              <p>사용자 관리</p>
            </div>
            <div onClick={()=>{nav('/ScheduleManagement')}}>
              <img src= {scheduleIcon}></img>
              <p>일정 관리</p>
            </div>
          </div>
          <div>
            <div onClick={()=>{nav('/AllActivitiLog')}}>
              <img src= {logIcon}></img>
              <p>활동 기록</p>
            </div>
            <div onClick={()=>{nav('/AdminTowelCount')}}><img src= {uploadIcon}></img>
            
              <p>수건 수량 확인</p>
            </div>

          </div>
      </div>
      {/* <div className='homeTitle'>
        <div>
          <p>대시보드</p>
          <p>홍보 문구</p>
        </div>
        <div>
          <p>사용자 관리</p>
          <p>일정 관리</p>
        </div>
        <div>
          <p>활동 기록</p>
          <p>수건 수량 확인</p>
        </div>
      
      </div>   */}
      
      <AdminFooter></AdminFooter>
    </div>
  )
}

export default AdminHome
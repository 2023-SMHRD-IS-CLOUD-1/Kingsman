import React from 'react'
import homeIcon from '../image/home.png'
import graphIcon from '../image/graph.png'
import promotionIcon from '../image/promotion.png'
import editIcon from '../image/edit.png'
import scheduleIcon from '../image/schedule.png'
import logIcon from '../image/log.png'
import uploadIcon from '../image/upload.png'
import { useNavigate } from 'react-router-dom'

const AdminFooter = () => {
    const nav = useNavigate();
  return (
    <div className='AdminFooter'>
        <div onClick={()=>{nav('/Dashboard')}}><img src= {graphIcon}></img></div>
        <div onClick={()=>{nav('/PromotionalText')}}><img src= {promotionIcon}></img></div>
        <div onClick={()=>{nav('/UserManagement')}}><img src= {editIcon}></img></div>
        <div onClick={()=>{nav('/AdminHome')}}><img src= {homeIcon}></img></div>
        <div onClick={()=>{nav('/ScheduleManagement')}}><img src= {scheduleIcon}></img></div>
        <div onClick={()=>{nav('/AllActivitiLog')}}><img src= {logIcon}></img></div>
        <div onClick={()=>{nav('/TowelCount')}}><img src= {uploadIcon}></img></div>
        


    </div>
  )
}

export default AdminFooter
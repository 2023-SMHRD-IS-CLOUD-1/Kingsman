import React from 'react'
import Calendar from './Calendar'
import SearchSchedule from './SearchSchedule'
import AdminHeader from '../AdminHome/AdminHeader'
import AdminFooter from '../AdminHome/AdminFooter'
import {ScheduleContext} from '../../context/ScheduleContext'
import { useState } from 'react'
const ScheduleManagement = () => {

  const [scheduleInput, setScheduleInput] = useState([
    { title: '프로젝트 시작', date: '2024-02-01', key: 1, color:"green"},
    { title: '수건수량 분석', date: '2024-02-02', key: 2, color:"black"}
  ]);

  const [scheduleDate, setScheduleDate] = useState();
  const [quantity, setQuantity] = useState();
  const [store, setStore] = useState('입고');
  const [scheduleColor, setScheduleColor] = useState("blue");





  const handlerScheduleButton = ()=>{
    console.log(scheduleDate, quantity, store);

    let scheduleKey = 1;

    if(scheduleInput.length>0){
      scheduleKey = scheduleInput[scheduleInput.length -1].key +1
    }
   
    setScheduleInput([
      ...scheduleInput,
      {title : quantity+store, date: scheduleDate, key:scheduleKey, color:scheduleColor}
    ])


  }



  return (

    <ScheduleContext.Provider
    value={{
      handlerScheduleButton,
      scheduleInput, setScheduleInput,
      scheduleDate, setScheduleDate,
      quantity, setQuantity,
      store, setStore,
      scheduleColor, setScheduleColor
    }}>

    <div>
        <AdminHeader />
        <Calendar />
        <SearchSchedule />
        <AdminFooter />
    </div>
    </ScheduleContext.Provider>
  )
}

export default ScheduleManagement
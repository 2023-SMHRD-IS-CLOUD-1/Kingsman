import React, { useEffect } from 'react'
import Calendar from './Calendar'
import SearchSchedule from './SearchSchedule'
import AdminHeader from '../AdminHome/AdminHeader.tsx'
import AdminFooter from '../AdminHome/AdminFooter'
import { ScheduleContext } from '../../context/ScheduleContext'
import { useState } from 'react'
import axios from 'axios'
const ScheduleManagement = () => {

  const [scheduleInput, setScheduleInput] = useState([
    { title: '프로젝트 시작', date: '2024-02-01', key: 1, color: "green" },
    { title: '수건수량 분석', date: '2024-02-02', key: 2, color: "black" }
  ]);

  const [scheduleDate, setScheduleDate] = useState();
  const [quantity, setQuantity] = useState();
  const [store, setStore] = useState('입고');
  const [scheduleColor, setScheduleColor] = useState("blue");
  const [scheCompleted, setScheCompleted] = useState(0);





  const handlerScheduleButton = () => {
    console.log(scheduleDate, quantity, store);

    setScheduleInput([
      ...scheduleInput,
      { title: quantity + store, date: scheduleDate, color: scheduleColor }
    ])

    const scheduleInformation = {
      s_DATE: scheduleDate,
      s_COUNTS: quantity,
      s_ID: "Admin",
      s_IN_OUT: store,
      s_COMPLETED: scheCompleted
    }
    axios.post('http://localhost:8085/kingsman/scheduleManage', scheduleInformation, { withCredentials: true })
      .then(res =>{
        console.log("일정 통신 성공", res);
      })
      .catch(error => {
        console.log("일정 오류", error);
      })

  }

  useEffect(()=>{

    const getScheduleList = async()=>{
      try{
        console.log("스케쥴리스트 통신 성공");
        const scheduleUrl = 'http://localhost:8085/kingsman/scheduleList';
        const response = await axios.get(scheduleUrl);
        console.log(response.data);
        console.log(response.data.s_DATE);

        setScheduleInput(response.data.map(item=>({
          title: item.s_COUNTS + "개 " + item.s_IN_OUT,
          date: item.s_DATE.substring(0,10),
          color: item.s_IN_OUT === '입고' ? 'blue' : 'red'
        })));
      } catch(error){
        console.log(error);
      }
    };

    getScheduleList();

  },[])








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
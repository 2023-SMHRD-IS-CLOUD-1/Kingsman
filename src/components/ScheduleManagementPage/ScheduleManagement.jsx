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
    { title: '프로젝트 시작', date: '2024-02-01', key: 1, color: "green", completed:false },
    { title: '수건수량 분석', date: '2024-02-02', key: 2, color: "black", completed:false }
  ]);

  const [scheduleDate, setScheduleDate] = useState();
  const [quantity, setQuantity] = useState();
  const [store, setStore] = useState('입고');
  const [scheduleColor, setScheduleColor] = useState("blue");
  const [scheCompleted, setScheCompleted] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");




  const handlerScheduleButton = () => {

    setScheduleInput([
      ...scheduleInput,
      { title: quantity + store, date: scheduleDate, color: scheduleColor, completed:scheCompleted }
    ])

    const scheduleInformation = {
      s_DATE: scheduleDate,
      s_COUNTS: quantity,
      s_ID: "Admin",
      s_IN_OUT: store,
      s_COMPLETED: scheCompleted
    }
    axios.post('http://43.201.66.47:8085/kingsman/scheduleManage', scheduleInformation, { withCredentials: true })
      .then(res =>{
      })
      .catch(error => {
      })

  }

  useEffect(()=>{

    const getScheduleList = async()=>{
      try{
        const scheduleUrl = 'http://43.201.66.47:8085/kingsman/scheduleList';
        const response = await axios.get(scheduleUrl);

        setScheduleInput(response.data.map(item=>({
          id: item.s_INDEX,
          title: item.s_COUNTS + "개 " + item.s_IN_OUT,
          date: item.s_DATE.substring(0,10),
          color: item.s_IN_OUT === '입고' ? 'blue' : 'red',
          extendedProps: {
            completed: item.s_COMPLETED === 1 ? true : false // 1일 때는 true, 그 외에는 false
        }
        })));
      } catch(error){
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
        scheduleColor, setScheduleColor,
        selectedDate, setSelectedDate
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
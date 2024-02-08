import React, { useEffect, useState } from 'react'
import AdminFooter from '../AdminHome/AdminFooter'
import AdminHeader from '../AdminHome/AdminHeader'
import TfBar from './TfBar'
import UserBar from './UserBar'
import TfPie from './TfPie'
import AccuracyLine from './AccuracyLine'
import WeeklyLine from './WeeklyLine'
import MonthlyLine from './MonthlyLine'

const Dashboard = (/*{list}*/) => {
    const [timeLine, setTimeLine] = useState("Week");

    // 시간 데이터 혹시 몰라서
    const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
        setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
    
   
  return (
    <div className>
        <AdminHeader></AdminHeader>
        <div className='percent'>
            <div>금주 최고 예측률 {}%</div>
            <div>예측률 평균 증감 {}%</div>
            <div>금일 입고량 {}묶음</div>
            <div>금주 입고량 {}묶음</div>
            <div>금월 입고량 {}묶음</div>
        </div>
        <div  className='chartTable'>
            
            <div className='setTime'> 
                <div onClick={()=>{setTimeLine("Week")}}>Week</div>
                <div onClick={()=>{setTimeLine("Month")}}>Month</div>
            </div>
            <div className='chart'>
            {timeLine === "Week"?
                <><h3>이번 주 입고량</h3><WeeklyLine className='chart' data={currentDate} /></>:
                
                <><h3>이번 달 입고량</h3><MonthlyLine className='chart' data={currentDate} /></>}

            </div>
            <div className='chart'>
                <h3>금일 T/F</h3>
                <TfBar  data={""}/>
            </div>
            <div className='chart'>
                <h3>전체 T/F</h3>
                <TfPie  data={"?"}/>
            </div>
            <div className='chart'>
                <h3>일별 예측률</h3>
                <AccuracyLine className='chart' data={currentDate} />
            </div>
            <div className='chart'>
                <h3>사용자별 예측률</h3>
                <UserBar className='chart' data={"?"} />
            </div>
        </div>

        <AdminFooter></AdminFooter>
    </div>
  )
}

export default Dashboard
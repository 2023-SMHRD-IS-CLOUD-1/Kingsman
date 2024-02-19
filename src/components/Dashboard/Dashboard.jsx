import './Dashboard.css'
import React, { useEffect, useState } from 'react'
import AdminFooter from '../AdminHome/AdminFooter'
import AdminHeader from '../AdminHome/AdminHeader.tsx'
import TfBar from './TfBar'
import UserBar from './UserBar'
import TfPie from './TfPie'
import AccuracyLine from './AccuracyLine'
import WeeklyLine from './WeeklyLine'
import MonthlyLine from './MonthlyLine'
import axios from 'axios'

const Dashboard = () => {
    const [timeLine, setTimeLine] = useState("Week");
    const [all, setAll] = useState("All");
    const [by, setBy] = useState("Day");
    const [currentDate, setCurrentDate] = useState(new Date());
    const [list,setList] = useState([]);
    const [bestAccuracy, setBestAccuracy] = useState(0);
    const [meanAccuracy, setMeanAccuracy] = useState(0);
    // const [sumDay, setSumDay] = useState(0);
    const [sumWeek, setSumWeek] = useState(0);
    const [sumMonth, setSumMonth] = useState(0);
    const [currentWeek, setCurrentWeek] = useState();
    const [tf, setTf]= useState([0,0]);
    const [user, setUser] = useState();
    
    // 같은 달인지 확인하는 함수들
    function getWeek(date) {
        const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
        const pastDaysOfYear = (date - firstDayOfYear) / 86400000; 
        return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
    }
    
    function isSameWeek(date1, date2) {
        return getWeek(date1) === getWeek(date2);
    }

    
    useEffect(() => {
        Promise.all([
            axios.post('http://localhost:8085/kingsman/Dashboard', null, {
                withCredentials: true,
                headers: { 'Content-type': 'application/json' },
            }),
            axios.post('http://localhost:8085/kingsman/Dashboard2', null, {
                withCredentials: true,
                headers: { 'Content-type': 'application/json' },
            })
        ]).then(([res1, res2]) => {
            const resData = res1.data;
            const userData = res2.data;
            console.log(resData);
            console.log(userData);
    
            let sumAccuracy = 0;
            // let daySum = 0;
            let weekSum = 0;
            let monthSum = 0;
            let count = 0;
            let accuracyBest = 0;
            let sun = 0;
            let mon = 0;
            let tue = 0;
            let wed = 0;
            let thu = 0;
            let fri = 0;
            let sat = 0;
            let tr = 0;
            let fa = 0;
    
            resData.forEach(item => {
                let dbDate = new Date(item.t_DATE);
                let nowDate = currentDate;
                let day = dbDate.getDay();
                dbDate.setHours(0, 0, 0, 0);
                nowDate.setHours(0, 0, 0, 0);
                if (dbDate.getTime() === nowDate.getTime()) {
                    // daySum += item.t_COUNT;
                    if (item.t_RESULT === "TRUE") {
                        tr += 1;
                    } else {
                        fa += 1;
                    }
                }
                if (isSameWeek(dbDate, nowDate)) {
                    if (item.t_RESULT === "TRUE") {
                        if (accuracyBest < item.t_ACCURACY) {
                            accuracyBest = item.t_ACCURACY;
                        }
                        weekSum += item.t_COUNT;
                        sumAccuracy += item.t_ACCURACY;
                        count += 1;
                    }
                    if (day === 0) {
                        sun += item.t_COUNT;
                    } else if (day === 1) {
                        mon += item.t_COUNT;
                    } else if (day === 2) {
                        tue += item.t_COUNT;
                    } else if (day === 3) {
                        wed += item.t_COUNT;
                    } else if (day === 4) {
                        thu += item.t_COUNT;
                    } else if (day === 5) {
                        fri += item.t_COUNT;
                    } else {
                        sat += item.t_COUNT;
                    }
                }
                if (dbDate.getMonth === nowDate.getMonth && dbDate.getFullYear === nowDate.getFullYear) {
                    monthSum += item.t_COUNT;
                }
            });
    
            setTf([tr, fa]);
            setList(resData);
            setBestAccuracy(accuracyBest);
            // setSumDay(daySum);
            setSumWeek(weekSum);
            setSumMonth(monthSum);
            setMeanAccuracy(sumAccuracy / count);
            setCurrentWeek([sun, mon, tue, wed, thu, fri, sat]);
            setUser(userData);
        }).catch(error => {
            console.error("Error fetching data:", error);
        });
    }, []);
    
    
   
  return (
    <div className>
        <AdminHeader></AdminHeader>
        <div className='percent'>
            <div>
                <div>주간 최고 예측률</div> 
                <div>{bestAccuracy}%</div>
            </div>
            <div>
                <div>주간 평균 예측률</div>
                <div>{meanAccuracy}%</div>
            </div>
            {/* <div>
                <div>일간 입고량</div>
                <div>{sumDay}묶음</div> 
            </div> */}
            <div>
                <div>주간 입고량</div>
                <div>{sumWeek}묶음</div> 
            </div>
            <div>
                <div>월간 입고량</div>
                <div>{sumMonth}묶음</div> 
            </div>
        </div>
        <div  className='chartTable'>
            
            <div className='setTime'> 
                <div onClick={()=>{setTimeLine("Week")}} className= {timeLine === "Week"? 'black':'gray'}>Week</div>
                <div onClick={()=>{setTimeLine("Month")}} className= {timeLine === "Month"? 'black':'gray'}>Month</div>
            </div>
            <div className='chart'>
            {timeLine === "Week"?
                <><h3>이번 주 입고량</h3><WeeklyLine data={currentWeek} /></>:
                
                <><h3>이번 달 입고량</h3><MonthlyLine  date={currentDate} data ={list} /></>}

            </div>
            <div className='setTime'> 
                <div onClick={()=>{setAll("All")}} className= {all === "All"? 'black':'gray'}>All</div>
                <div onClick={()=>{setAll("Today")}} className= {all === "Today"? 'black':'gray'}>Today</div>
            </div>
            <div className='chart'>
            {all === "Today"?
                <><h3>금일 T/F</h3>
                <TfBar  data={tf}/></>:
                
                <><h3>전체 T/F</h3>
                <TfPie  data={list}/></>}

            </div>
            <div className='setTime'> 
                <div onClick={()=>{setBy("Day")}} className= {by === "Day"? 'black':'gray'}>Day</div>
                <div onClick={()=>{setBy("User")}} className= {by === "User"? 'black':'gray'}>User</div>
            </div>
            <div className='chart'>
            {by === "Day"?
                <><h3>일별 평균 예측률</h3>
                <AccuracyLine className='chart' date={currentDate} data ={list} /></>:
                
                <><h3>사용자별 평균 예측률</h3>
                <UserBar className='chart' data={list}  user={user} /></>}

            </div>
            {/* <div className='chart'>
                <h3>금일 T/F</h3>
                <TfBar  data={tf}/>
            </div>
            <div className='chart'>
                <h3>전체 T/F</h3>
                <TfPie  data={list}/>
            </div> */}
            {/* <div className='chart'>
                <h3>일별 평균 예측률</h3>
                <AccuracyLine className='chart' date={currentDate} data ={list} />
            </div>
            <div className='chart'>
                <h3>사용자별 평균 예측률</h3>
                <UserBar className='chart' data={list}  user={user} />
            </div> */}
        </div>

        <AdminFooter></AdminFooter>
    </div>
  )
}

export default Dashboard
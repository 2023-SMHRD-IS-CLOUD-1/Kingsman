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
    const [timeLine, setTimeLine] = useState("Month");
    const [all, setAll] = useState("All");
    const [by, setBy] = useState("Day");
    const [currentDate, setCurrentDate] = useState(new Date());
    const [list,setList] = useState([]);
    const [bestAccuracy, setBestAccuracy] = useState(0);
    const [meanAccuracy, setMeanAccuracy] = useState(0);
    const [sumWeek, setSumWeek] = useState(0);
    const [sumMonth, setSumMonth] = useState(0);
    const [currentWeekIn, setCurrentWeekIn] = useState();
    const [currentWeekOut, setCurrentWeekOut] = useState();
    const [tf, setTf]= useState([0,0]);
    const [user, setUser] = useState();
    const [scheduleIn, setScheduleIn] = useState();
    const [scheduleOut, setScheduleOut] = useState();
    
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
            }),
            axios.post('http://localhost:8085/kingsman/Dashboard3', null, {
                withCredentials: true,
                headers: { 'Content-type': 'application/json' },
            })
        ]).then(([res1, res2, res3]) => {
            const resData = res1.data;
            const userData = res2.data;
            const scheduleData = res3.data;
            let sumAccuracy = 0;
            let weekSum = 0;
            let monthSum = 0;
            let count = 0;
            let accuracyBest = 0;
            let inSun = 0;
            let inMon = 0;
            let inTue = 0;
            let inWed = 0;
            let inThu = 0;
            let inFri = 0;
            let inSat = 0;
            let outSun = 0;
            let outMon = 0;
            let outTue = 0;
            let outWed = 0;
            let outThu = 0;
            let outFri = 0;
            let outSat = 0;
            let tr = 0;
            let fa = 0;
    
            resData.forEach(item => {
                let dbDate = new Date(item.t_DATE);
                let nowDate = currentDate;
                let day = dbDate.getDay();
                dbDate.setHours(0, 0, 0, 0);
                nowDate.setHours(0, 0, 0, 0);
                if (dbDate.getTime() === nowDate.getTime()) {
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
                        sumAccuracy += item.t_ACCURACY;
                        count += 1;
                    }
                }
                if(count ===0){
                    count =1
                }
            });
            scheduleData.forEach(item => {
                let dbDate = new Date(item.s_DATE);
                let nowDate = currentDate;
                let day = dbDate.getDay();
                dbDate.setHours(0, 0, 0, 0);
                nowDate.setHours(0, 0, 0, 0);
                if(item.s_IN_OUT === "입고"){
                    if (isSameWeek(dbDate, nowDate)) {
                        weekSum += item.s_COUNTS;
                        if (day === 0) {
                            inSun += item.s_COUNTS;
                        } else if (day === 1) {
                            inMon += item.s_COUNTS;
                        } else if (day === 2) {
                            inTue += item.s_COUNTS;
                        } else if (day === 3) {
                            inWed += item.s_COUNTS;
                        } else if (day === 4) {
                            inThu += item.s_COUNTS;
                        } else if (day === 5) {
                            inFri += item.s_COUNTS;
                        } else {
                            inSat += item.s_COUNTS;
                        }
                    }
                    if (dbDate.getMonth === nowDate.getMonth && dbDate.getFullYear === nowDate.getFullYear) {
                        monthSum += item.s_COUNTS;
                    }
                }else{
                    if (isSameWeek(dbDate, nowDate)) {
                        if (day === 0) {
                            outSun += item.s_COUNTS;
                        } else if (day === 1) {
                            outMon += item.s_COUNTS;
                        } else if (day === 2) {
                            outTue += item.s_COUNTS;
                        } else if (day === 3) {
                            outWed += item.s_COUNTS;
                        } else if (day === 4) {
                            outThu += item.s_COUNTS;
                        } else if (day === 5) {
                            outFri += item.s_COUNTS;
                        } else {
                            outSat += item.s_COUNTS;
                        }
                    }
                }
            });
    
            setTf([tr, fa]);
            setList(resData);
            setBestAccuracy(accuracyBest);
            setSumWeek(weekSum);
            setSumMonth(monthSum);
            setMeanAccuracy(sumAccuracy / count);
            setCurrentWeekIn([inSun, inMon, inTue, inWed, inThu, inFri, inSat]);
            setCurrentWeekOut([outSun, outMon, outTue, outWed, outThu, outFri, outSat]);
            setUser(userData);
            setScheduleIn(scheduleData.filter(item => item.s_IN_OUT === "입고"));
            setScheduleOut(scheduleData.filter(item => item.s_IN_OUT === "출고"));
        }).catch(error => {
            console.error("Error fetching data:", error);
        });
        setCurrentDate(new Date());
    }, []);
    
    
   
  return (
    <div>
        <AdminHeader></AdminHeader>
            <div className='dashboard'>
                <div className='percent'>
                    <div>
                        <div>주간 최고 신뢰도</div> 
                        <div>{bestAccuracy}%</div>
                    </div>
                    <div>
                        <div>주간 평균 신뢰도</div>
                        <div>{Math.floor(meanAccuracy)}%</div>
                    </div>
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
                        <div onClick={()=>{setTimeLine("Month")}} className= {timeLine === "Month"? 'black':'gray'}>Month</div>
                        <div onClick={()=>{setTimeLine("Week")}} className= {timeLine === "Week"? 'black':'gray'}>Week</div>
                    </div>
                    <div className='chart'>
                    {timeLine === "Week"?
                        <><h3>이번 주 입·출고</h3><WeeklyLine dataIn={currentWeekIn} dataOut={currentWeekOut} /></>:
                        
                        <><h3>이번 달 입·출고</h3><MonthlyLine date={currentDate} inData={scheduleIn} outData={scheduleOut} /></>}

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
                        <><h3>일별 평균 신뢰도</h3>
                        <AccuracyLine className='chart' date={currentDate} data ={list} /></>:
                        
                        <><h3>사용자별 평균 신뢰도</h3>
                        <UserBar className='chart' data={list}  user={user} /></>}

                    </div>
                </div>
            </div>
        <AdminFooter></AdminFooter>
    </div>
  )
}

export default Dashboard
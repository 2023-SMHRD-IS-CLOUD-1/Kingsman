import './App.css';
import ScheduleManagement from './components/ScheduleManagementPage/ScheduleManagement';
import Login from './components/LoginPage/Login';
import SignUp from './components/SignUpPage/SignUp'
import AdminHome from './components/AdminHome/AdminHome';
import AllActivitiLog from './components/AllActivityLog/AllActivitiLog';
import Dashboard from './components/Dashboard/Dashboard';
import AdminTowelCount from './components/AdminTowelCount/AdminTowelCount';
import PromotionalText from './components/PromotinalText/PromotionalText';
import PromotionalTextData from './components/PromotionalTextData/PromotionalTextData';
import UserManagement from './components/UserManagement/UserManagement';
import UserModify from './components/UserManagement/UserModify';
import AdminModifyProfile from './components/AdminModifyProfile/AdminModifyProfile';
import UserModifyProfile from './components/UserModifyProfile/UserModifyProfile'
import UserActivityLog from './components/UserActivityLogPage/UserActivityLog'
import UserTowelCount from './components/UserTowelCount.jsx/UserTowelCount';
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './Calendar.css'
import './css/UserActivityLog.css'
import './css/AllActivityLog.css'

import './css/UserTowelCount.css'
import UserCountTowel from './components/UserTowelCountPage/UserCountTowel';
function App() {
  
  const onSearch = ()=>{
    console.log('on search')
  }
 

  return (
    <div className="App" style={{overflow: 'hidden'}}>
      
        <Routes>
            <Route path='/AdminHome' element={<AdminHome></AdminHome>}></Route>
            <Route path='/AllActivitiLog' element={<AllActivitiLog onSearch={onSearch}></AllActivitiLog>}></Route>
            <Route path='/Dashboard' element={<Dashboard></Dashboard>}></Route>
            <Route path='/PromotionalText' element={<PromotionalText></PromotionalText>}></Route>
            <Route path='/PromotionalTextData' element={<PromotionalTextData></PromotionalTextData>}></Route>
            <Route path='/ScheduleManagement' element={<ScheduleManagement></ScheduleManagement>}></Route>
            <Route path='/UserManagement' element={<UserManagement></UserManagement>}></Route>
            <Route path='/UserModify' element={<UserModify></UserModify>}></Route>
            <Route path='/AdminModifyProfile' element={<AdminModifyProfile></AdminModifyProfile>}></Route>
            <Route path='/UserModifyProfile' element={<UserModifyProfile></UserModifyProfile>}></Route>
            <Route path='/UserActivityLog' element={<UserActivityLog></UserActivityLog>}></Route>
            <Route path='/' element={<Login></Login>}></Route>
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/UserCountTowel' element={<UserCountTowel/>}/>
        </Routes>
        
        

      
    </div>
  );
}

export default App;
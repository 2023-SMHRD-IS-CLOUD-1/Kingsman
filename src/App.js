import './App.css';
import ScheduleManagement from './components/ScheduleManagementPage/ScheduleManagement';
import Login from './components/LoginPage/Login';
import SignUp from './components/SignUpPage/SignUp'
import AdminHome from './components/AdminHome/AdminHome';
import AllActivityLog from './components/AllActivityLog/AllActivityLog';
import Dashboard from './components/Dashboard/Dashboard';
import TowelCount from './components/TowelCount/TowelCount';
import PromotionalText from './components/PromotinalText/PromotionalText';
import UserManagement from './components/UserManagement/UserManagement';
import AdminModifyProfile from './components/AdminModifyProfile/AdminModifyProfile';
import UserModifyProfile from './components/UserModifyProfile/UserModifyProfile'
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './Calendar.css'
function App() {
  // 데이터 받는 용도임. 일단 주석 처리 해놓음
  // const [list,setList] = useState([]);
  //   useEffect(()=>{
  //       axios.get("")
  //       .then((res)=>{
  //         setList(res.data.list)
          
  //       })
  //     },[])
  return (
    <div className="App">
      
        <Routes>
            <Route path='/AdminHome' element={<AdminHome></AdminHome>}></Route>
            <Route path='/AllActivityLog' element={<AllActivityLog></AllActivityLog>}></Route>
            <Route path='/Dashboard' element={<Dashboard></Dashboard>}></Route>
            <Route path='/TowelCount' element={<TowelCount></TowelCount>}></Route>
            <Route path='/PromotionalText' element={<PromotionalText></PromotionalText>}></Route>
            <Route path='/ScheduleManagement' element={<ScheduleManagement></ScheduleManagement>}></Route>
            <Route path='/UserManagement' element={<UserManagement></UserManagement>}></Route>
            <Route path='/AdminModifyProfile' element={<AdminModifyProfile></AdminModifyProfile>}></Route>
            <Route path='/' element={<Login></Login>}></Route>
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/UserModifyProfile' element={<UserModifyProfile></UserModifyProfile>}></Route>
        </Routes>
        
        

      
    </div>
  );
}

export default App;

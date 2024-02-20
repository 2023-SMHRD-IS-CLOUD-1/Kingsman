import './UserManagement.css'
import React, { useEffect, useState } from 'react'
import AdminHeader from '../AdminHome/AdminHeader.tsx'
import AdminFooter from '../AdminHome/AdminFooter'
import { useLocation } from "react-router";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const UserModify = () => {
  const location = useLocation();
  const {selectedUser } = location.state || {};
  const [user, setUser] = useState(null);
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('');
  const [count, setCount] = useState(0);
  const nav = useNavigate();
  console.log(selectedUser)

  useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
    }
  }, [selectedUser]);
  
  useEffect(()=>{
    if(user!=null){
      setPosition(user.b_POSITION);
      setDepartment(user.b_DEPS);
    }
  }, [user])

  useEffect(() => {
    if(count>0){

      console.log(user)
      let userId = user.b_ID
      axios.post('http://localhost:8085/kingsman/UserModify', 
      {userId : userId, position : position, department:department},
    { withCredentials: true,
      headers: {'Content-type': 'application/json'},
    }).then()
      .catch(error => {
        console.error('Error searching users:', error);
      });
    }
  }, [count]);


  if (user == null) {
    return <div>Loading...</div>;
  }else{
    return (
      <div>
        <AdminHeader></AdminHeader>
        <div className='UserModify'>
          <h2>사용자 정보 수정</h2>
          <div>
            <table>
              <tr>
                <td>이름</td>
                <td>{user.b_NAME}</td>
              </tr>
              <tr>
                <td>직급</td>
                <td>
                  <select value={position} onChange={(e) => setPosition(e.target.value)}>
                      <option value= "사원">사원</option>
                      <option value= "주임">주임</option>
                      <option value= "대리">대리</option>
                      <option value= "과장">과장</option>
                      <option value= "차장">차장</option>
                      <option value= "부장">부장</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>부서</td>
                <td>
                  <select value={department} onChange={(e) => setDepartment(e.target.value)}>
                      <option value= "생산관리">생산관리</option>
                      <option value= "구매관리">구매관리</option>
                      <option value= "품질관리">품질관리</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>사원 번호</td>
                <td>{user.b_EMPNO}</td>
              </tr>
              <tr>
                <td>개인 연락처</td>
                <td>{user.b_PHONE}</td>
              </tr>
              <tr>
                <td>가입 일자</td>
                <td>{user.b_DATE.slice(0,10)}</td>
              </tr>
            </table>
            <div>
              <button className='searchButton' onClick={()=>{setCount(count+1)}}>저장</button>
              <button className='searchButton' onClick={() => { nav('/UserManagement')}} >취소</button>
            </div>
          </div>
    
        </div>
        <AdminFooter></AdminFooter>
      </div>
    )
  }
  
  }

export default UserModify
import React, { useState } from 'react';

import '../css/UserActivityLog.css'

const UserLogListTable = () => {

    const [isOpen, setIsOpen] = useState(false); // 슬라이드 상태를 관리합니다.
  
    const handlerSlideToggle = () => {
      setIsOpen(!isOpen); // isOpen 상태를 반전시켜 슬라이드를 열거나 닫습니다.
      console.log(isOpen);
    };

  



   return (
    <div className='UserLogTable'>
      <table>
        <thead>
          <tr>
            <th>날짜</th>
            <th>시간</th>
            <th>결과</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td onClick={handlerSlideToggle}>2024.02.01.</td>
            <td >13:50:51</td>
            <td>50(O)</td>
          </tr>
          <tr className={isOpen ? 'slide-open' : 'slide-closed'}>
            <td colSpan="3">이미지 데이터</td>
          </tr>
           <tr>
            <td>2024.02.02</td>
            <td>13:50:51</td>
            <td>0(X)</td>
          </tr><tr>
            <td>2024.02.03</td>
            <td>16:01:23</td>
            <td>0(X)</td>
          </tr><tr>
            <td>2024.02.04</td>
            <td>11:11:18</td>
            <td>0(X)</td>
          </tr><tr>
            <td>2024.02.05</td>
            <td>18:18:18</td>
            <td>50(O)</td>
          </tr> 

        </tbody>
      </table>
    </div>


  )
}

export default UserLogListTable;
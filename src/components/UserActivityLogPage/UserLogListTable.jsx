import React, { useState } from 'react';
import ActivitiLogButtons from '../AllActivityLog/ActivitiLogButtons';
import towelSample from '../../image/sampleTowel.jpg';
import axios from 'axios';

const UserActivityLog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  // const rows = [
  //   { id: 1, date: '2024.02.01', time: '13:50:51', result: 'T' },
  //   { id: 2, date: '2024.02.02', time: '14:50:51', result: 'T' },
  //   { id: 3, date: '2024.02.03', time: '11:50:51', result: 'F' },
  //   { id: 4, date: '2024.02.04', time: '16:50:51', result: 'F' },
  //   { id: 5, date: '2024.02.05', time: '17:50:51', result: 'T' },
  //   { id: 6, date: '2024.02.06', time: '13:50:51', result: 'F' },
  //   { id: 7, date: '2024.02.07', time: '15:50:51', result: 'T' },
  //   { id: 8, date: '2024.02.08', time: '09:50:51', result: 'T' },
  //   { id: 9, date: '2024.02.09', time: '12:50:51', result: 'F' },
  //   { id: 10, date: '2024.02.10', time: '1:50:51', result: 'F' },
  //   { id: 11, date: '2024.02.11', time: '17:50:51', result: 'F' },
  //   { id: 12, date: '2024.02.12', time: '15:50:51', result: 'T' },
  //   { id: 13, date: '2024.02.13', time: '13:50:51', result: 'T' },
  //   { id: 14, date: '2024.02.14', time: '12:50:51', result: 'T' },
  // ];

  const handleSlideToggle = (t_INDEX) => {
    setIsOpen(!isOpen);
    setSelectedRow(t_INDEX === selectedRow ? null : t_INDEX);
  };

  const getTimeFromDateString = (dateString) => {
    if (!dateString) return '';
    const dateObject = new Date(dateString);
    const hours = dateObject.getHours().toString().padStart(2, '0');
    const minutes = dateObject.getMinutes().toString().padStart(2, '0');
    const seconds = dateObject.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const renderRows = () => {
    return userLogData.map((item, index) => (
      <React.Fragment key={index}>
        <tr onClick={() => handleSlideToggle(item.t_INDEX)}>
          <td className='activitiLogTd'>{formatDate(item.t_DATE)}</td>
          <td className='activitiLogTd'>{getTimeFromDateString(item.t_DATE)}</td>
          <td className={`activitiLogTd ${item.t_RESULT === 'TRUE' ? 'green' : 'red' }`}>{item.t_RESULT}</td>
        </tr>
        {selectedRow === item.t_INDEX &&
          <tr className={`${isOpen ? 'activitiLog-slide-open' : 'activitiLog-slide-closed'} ${item.t_RESULT === 'TRUE' ? 'toggleGreen' : 'toggleRed'}`}>
            <td colSpan={5} style={{ position: 'relative', textAlign: 'center' }}>
              <img src={towelSample} alt="이미지 설정" style={{ height: "200px", marginBottom: "10px" }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', marginBottom: "10px" }}>
                <ActivitiLogButtons />
              </div>
            </td>
          </tr>
        }
      </React.Fragment>
    ));
  };
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const formattedDate = dateString.slice(0, 10);
    return formattedDate;
  };

  React.useEffect(() => {
    const fetchData2 = async () => {
      try {
        const url = "http://localhost:8085/kingsman/Notiresultfinal";
        const res = await axios.get(url);
        const userLogData = res.data

        userLogData.sort((a, b) => new Date(b.t_DATE) - new Date(a.t_DATE));

        console.log('유저동균알림유저', res.data);
        setUserLogData(userLogData)
        console.log("유저하하하하하유저", userLogData)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData2();
  }, []);

 const [userLogData, setUserLogData] = useState([]);


  return (
    <div className='activitiLog'>
      <table className='activitiTable'>
        <thead>
          <tr>
            <th className='activitiLogTh'>날짜</th>
            <th className='activitiLogTh'>시간</th>
            <th className='activitiLogTh'>결과</th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    </div>
  );
};

export default UserActivityLog;

import React, { useState } from 'react';
import ActivitiLogButtons from '../AllActivityLog/ActivitiLogButtons';
import towelSample from '../../image/sampleTowel.jpg';
import axios from 'axios';

const UserActivityLog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);


  const handleSlideToggle = (t_INDEX) => {
    setIsOpen(!isOpen);
    setSelectedRow(t_INDEX === selectedRow ? null : t_INDEX);
  };

  const renderRows = () => {
    return userLogData.map((item, index) => (

      <React.Fragment key={index}>

        <tr onClick={() => handleSlideToggle(item.t_INDEX)}>
          <td className='activitiLogTd'>{formatDate(item.t_DATE)}</td>
          <td className='activitiLogTd'>{item.t_TIME}</td>

          <td className={`activitiLogTd ${item.t_RESULT === 'TRUE' ? 'green' : 'red'}`}>{item.t_RESULT}</td>
        </tr>

        {selectedRow === item.t_INDEX &&
          <tr className={`${isOpen ? 'activitiLog-slide-open' : 'activitiLog-slide-closed'} ${item.t_RESULT === 'TRUE' ? 'toggleGreen' : 'toggleRed'}`}>
            <td colSpan={5} style={{ position: 'relative', textAlign: 'center' }}>
              <img src={item.t_IMAGE} alt="이미지 설정" style={{ height: "200px", marginBottom: "10px" }} />
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




  const id = sessionStorage.getItem("user")

  React.useEffect(() => {
    const fetchData2 = async () => {
      try {
        const payload2 = {
          t_ID: id
        };
        const url = "http://43.201.66.47:8085/kingsman/Notiresultme";
        const res = await axios.post(url, payload2); // POST 요청으로 변경
        const userLogData = res.data

        userLogData.sort((a, b) => new Date(b.t_DATE) - new Date(a.t_DATE));
        userLogData.sort((a, b) => new Date(b.t_TIME) - new Date(a.t_TIME));

        setUserLogData(userLogData)
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

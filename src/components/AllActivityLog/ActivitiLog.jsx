import React, { useState } from 'react';
import ActivitiLogButtons from './ActivitiLogButtons';
import towelSample from '../../image/sampleTowel.jpg';
import axios from 'axios';

const ActivitiLog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [activitiLogData, setActivitiLogData] = useState([]);

  const handleSlideToggle = (t_INDEX) => {
    setIsOpen(!isOpen);
    setSelectedRow(t_INDEX === selectedRow ? null : t_INDEX);
  };

  const renderRows = () => {
    return activitiLogData.map((item, index) => (
      <React.Fragment key={index}>
        <tr onClick={() => handleSlideToggle(item.t_INDEX)}>
          <td className='activitiLogTd'>{formatDate(item.t_DATE)}</td>
          <td className='activitiLogTd'>{maskName(item.user.b_NAME)}</td>
          <td className='activitiLogTd'>{item.user.b_POSITION}</td>
          <td className='activitiLogTd'>{item.user.b_DEPS}</td>
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

  const maskName = (name) => {
    if (!name) return '';
    const lengthToMask = Math.floor(name.length / 2); // 가운데 * 처리할 문자열 길이 계산
    const maskedName = name.substring(0, lengthToMask) + '*'.repeat(name.length - lengthToMask * 2) + name.substring(name.length - lengthToMask); // 가운데 *로 비식별화
    return maskedName;
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const formattedDate = dateString.slice(0, 10);
    return formattedDate;
  };

  React.useEffect(() => {
    const fetchData2 = async () => {
      try {
        const url = "http://43.201.66.47:8085/kingsman/Notiresultfinal";
        const res = await axios.get(url);
        const activitiLogData = res.data

        activitiLogData.sort((a, b) => new Date(b.t_DATE) - new Date(a.t_DATE));

        setActivitiLogData(activitiLogData)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData2();
  }, []);

  return (
    <div className='activitiLog'>
      <table className='activitiTable'>
        <thead>
          <tr>
            <th className='activitiLogTh'>날짜</th>
            <th className='activitiLogTh'>이름</th>
            <th className='activitiLogTh'>직급</th>
            <th className='activitiLogTh'>부서</th>
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

export default ActivitiLog;
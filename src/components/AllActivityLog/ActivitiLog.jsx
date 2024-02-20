import React, { useState } from 'react';
import ActivitiLogButtons from './ActivitiLogButtons';
import towelSample from '../../image/sampleTowel.jpg';
import axios from 'axios';
import AWS from "aws-sdk";

const ActivitiLog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  // const rows = [
  //   { id: 1, date: '2024.02.01', name: '박범석', pos: '사장', dep: '경영', result: 'T' },
  //   { id: 2, date: '2024.02.02', name: '한명훈', pos: '이사', dep: '회계', result: 'T' },
  //   { id: 3, date: '2024.02.03', name: '박재욱', pos: '부장', dep: '법인', result: 'F' },
  //   { id: 4, date: '2024.02.04', name: '박준', pos: '과장', dep: '인사', result: 'T' },
  //   { id: 5, date: '2024.02.05', name: '김동균', pos: '사원', dep: '마케팅', result: 'T' },
  //   { id: 6, date: '2024.02.06', name: '김동균', pos: '사원', dep: '마케팅', result: 'F' },
  //   { id: 7, date: '2024.02.01', name: '박범석', pos: '사장', dep: '경영', result: 'T' },
  //   { id: 8, date: '2024.02.02', name: '한명훈', pos: '이사', dep: '회계', result: 'T' },
  //   { id: 9, date: '2024.02.03', name: '박재욱', pos: '부장', dep: '법인', result: 'F' },
  //   { id: 10, date: '2024.02.04', name: '박준', pos: '과장', dep: '인사', result: 'T' },
  //   { id: 11, date: '2024.02.05', name: '김동균', pos: '사원', dep: '마케팅', result: 'T' },
  //   { id: 12, date: '2024.02.06', name: '김동균', pos: '사원', dep: '마케팅', result: 'F' },
  // ];

  const handleSlideToggle = (t_INDEX) => {
    setIsOpen(!isOpen);
    setSelectedRow(t_INDEX === selectedRow ? null : t_INDEX);
  };

  // {topFourData.map((item, index) => (
  //   <tr key={index}>
  //    <td>{item.user.b_NAME}</td>
  //   <td>{item.user.b_POSITION}</td>
  //    <td>{formatDate(item.t_DATE)}</td> 
  //   <td style={{ color: item.t_RESULT === 'TRUE' ? 'green' : 'red' }}>
  //    {item.t_RESULT === 'TRUE' ? 'T' : 'F'}
  //   </td>
  //  </tr>
  //  ))}

  const renderRows = () => {
    return activitiLogData.map((item, index) => (
      <React.Fragment key={index}>
        <tr onClick={() => handleSlideToggle(item.t_INDEX)}>
          <td className='activitiLogTd'>{formatDate(item.t_DATE)}</td>
          <td className='activitiLogTd'>{item.user.b_NAME}</td>
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

  const formatDate = (dateString) => {
    if (!dateString) return ''; // dateString이 없는 경우 빈 문자열 반환
    // dateString에서 'T00:00:00.000+09:00' 부분을 잘라냅니다.
    const formattedDate = dateString.slice(0, 10); // 'T00:00:00.000+09:00'의 길이가 10이므로 10까지 잘라냅니다.
    return formattedDate;
  };

  React.useEffect(() => {
    const fetchData2 = async () => {
      try {
        const url = "http://localhost:8085/kingsman/Notiresultfinal";
        const res = await axios.get(url);
        const activitiLogData = res.data

        activitiLogData.sort((a, b) => new Date(b.t_DATE) - new Date(a.t_DATE));

        console.log('관리자동균알림관리자', res.data);
        setActivitiLogData(activitiLogData)
        console.log("롸롸롸롸롸롸롸롸", activitiLogData)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData2();
  }, []);

 const [activitiLogData, setActivitiLogData] = useState([]); // topFourData 상태 선언
  // React.useEffect(() => {
  //   const fetchData3 = async () => {
  //     try {
  //       const url = "http://localhost:8085/kingsman/Notiresultfinal";
  //       const res = await axios.get(url);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData3();
  // }, []);

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
          {renderRows()};
        </tbody>
      </table>
    </div>
  );
};

export default ActivitiLog;

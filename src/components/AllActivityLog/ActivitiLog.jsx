import React, { useState, useEffect } from 'react';
import ActivitiLogButtons from './ActivitiLogButtons';
import towelSample from '../../image/sampleTowel.jpg';
import axios from 'axios';
import { getImg } from './AwsS3'; // awsS3 파일에서 getImg 함수 가져오기 

const ActivitiLog = () => {
  const [activitiLogData, setActivitiLogData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // 초기에는 로딩 중으로 설정

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "http://localhost:8085/kingsman/Notiresultfinal";
        const res = await axios.get(url);
        const data = res.data;
        // 이미지 URL 가져오기
        for (const item of data) {
          const imageUrl = await getImg(item.t_IMAGE); // 이미지 가져오기
          item.imageUrl = imageUrl; // 가져온 이미지 URL을 데이터에 추가
        }
        setActivitiLogData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); // 데이터를 모두 받은 후 로딩 중 상태 해제
      }
    };
    fetchData();
  }, []);

  const handleSlideToggle = (t_INDEX) => {
    setIsOpen(!isOpen);
    setSelectedRow(t_INDEX === selectedRow ? null : t_INDEX);
  };

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
        {isLoading ? ( // 로딩 중일 때 "Loading..." 표시
        <div>Loading...</div>
      ) :renderRows()}
        </tbody>
      </table>
    </div>
  );
};

export default ActivitiLog;

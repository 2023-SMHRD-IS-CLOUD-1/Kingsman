import React, { useState } from 'react';
import ActivitiLogButtons from './ActivitiLogButtons';
import towelSample from '../../image/towelSample.jpg';

const ActivitiLog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const rows = [
    { id: 1, date: '2024.02.01', name: '박범석', pos: '사장', dep: '경영', result: 'T' },
    { id: 2, date: '2024.02.02', name: '한명훈', pos: '이사', dep: '회계', result: 'T' },
    { id: 3, date: '2024.02.03', name: '박재욱', pos: '부장', dep: '법인', result: 'F' },
    { id: 4, date: '2024.02.04', name: '박준', pos: '과장', dep: '인사', result: 'T' },
    { id: 5, date: '2024.02.05', name: '김동균', pos: '사원', dep: '마케팅', result: 'T' },
    { id: 6, date: '2024.02.06', name: '김동균', pos: '사원', dep: '마케팅', result: 'F' },
    { id: 7, date: '2024.02.01', name: '박범석', pos: '사장', dep: '경영', result: 'T' },
    { id: 8, date: '2024.02.02', name: '한명훈', pos: '이사', dep: '회계', result: 'T' },
    { id: 9, date: '2024.02.03', name: '박재욱', pos: '부장', dep: '법인', result: 'F' },
    { id: 10, date: '2024.02.04', name: '박준', pos: '과장', dep: '인사', result: 'T' },
    { id: 11, date: '2024.02.05', name: '김동균', pos: '사원', dep: '마케팅', result: 'T' },
    { id: 12, date: '2024.02.06', name: '김동균', pos: '사원', dep: '마케팅', result: 'F' },
  ];

  const handleSlideToggle = (id) => {
    setIsOpen(!isOpen);
    setSelectedRow(id === selectedRow ? null : id);
  };

  const renderRows = () => {
    return rows.map(row => (
      <React.Fragment key={row.id}>
        <tr onClick={() => handleSlideToggle(row.id)}>
          <td className='activitiLogTd'>{row.date}</td>
          <td className='activitiLogTd'>{row.name}</td>
          <td className='activitiLogTd'>{row.pos}</td>
          <td className='activitiLogTd'>{row.dep}</td>
          <td className={`activitiLogTd ${row.result === 'T' ? 'green' : 'red'}`}>{row.result}</td>
        </tr>
        {selectedRow === row.id &&
           <tr className={`${isOpen ? 'activitLog-slide-open' : 'activitLog-slide-closed'} ${row.result === 'T' ? 'toggleGreen' : 'toggleRed'}`}>
            <td colSpan={5} style={{ position: 'relative', textAlign: 'center' }}>
              <img src={towelSample} alt="이미지 설정" style={{ height: "250px", marginBottom: "10px" }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', marginBottom:"10px" }}>
                <ActivitiLogButtons />
              </div>
            </td>
          </tr>
        }
      </React.Fragment>
    ));
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
          {renderRows()}
        </tbody>
      </table>
    </div>
  );
};

export default ActivitiLog;

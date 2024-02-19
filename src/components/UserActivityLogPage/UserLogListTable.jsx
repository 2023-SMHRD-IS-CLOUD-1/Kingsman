import React, { useState } from 'react';
import ActivitiLogButtons from '../AllActivityLog/ActivitiLogButtons';
import towelSample from '../../image/towelSample.jpg';

const UserActivityLog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const rows = [
    { id: 1, date: '2024.02.01', time: '13:50:51', result: 'T' },
    { id: 2, date: '2024.02.02', time: '14:50:51', result: 'T' },
    { id: 3, date: '2024.02.03', time: '11:50:51', result: 'F' },
    { id: 4, date: '2024.02.04', time: '16:50:51', result: 'F' },
    { id: 5, date: '2024.02.05', time: '17:50:51', result: 'T' },
    { id: 6, date: '2024.02.06', time: '13:50:51', result: 'F' },
    { id: 7, date: '2024.02.07', time: '15:50:51', result: 'T' },
    { id: 8, date: '2024.02.08', time: '09:50:51', result: 'T' },
    { id: 9, date: '2024.02.09', time: '12:50:51', result: 'F' },
    { id: 10, date: '2024.02.10', time: '1:50:51', result: 'F' },
    { id: 11, date: '2024.02.11', time: '17:50:51', result: 'F' },
    { id: 12, date: '2024.02.12', time: '15:50:51', result: 'T' },
    { id: 13, date: '2024.02.13', time: '13:50:51', result: 'T' },
    { id: 14, date: '2024.02.14', time: '12:50:51', result: 'T' },
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
          <td className='activitiLogTd'>{row.time}</td>
          <td className={`activitiLogTd ${row.result === 'T' ? 'green' : 'red'}`}>{row.result}</td>
        </tr>
        {selectedRow === row.id &&
          <tr className={isOpen ? 'activitLog-slide-open' : 'activitLog-slide-closed'}>
            <td colSpan={5} style={{ position: 'relative', textAlign: 'center' }}>
              <img src={towelSample} alt="이미지 설정" style={{ height: "250px", marginBottom: "10px" }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
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

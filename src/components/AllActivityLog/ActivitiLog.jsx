import React, { useState } from 'react';

const ActivitiLog = () => {
  // 더 보기 상태를 관리하는 상태 변수
  const [showMore, setShowMore] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // 행 데이터 배열
  const rows = [
    { date: '2024.02.01', time: '13:50:51', name: '박범석', pos:'사장', dep: '경영', emp_num:'14-77777777', ph_num:'010-1234-1234'},
    { date: '2024.02.02', time: '11:50:45', name: '한명훈', pos: '이사', dep: '회계', emp_num:'18-76245235', ph_num:'010-4567-4585'},
    { date: '2024.02.03', time: '16:14:23', name: '박재욱', pos: '부장', dep: '법인', emp_num:'17-71341254', ph_num:'010-4444-4545'},
    { date: '2024.02.04', time: '19:50:43', name: '박준', pos: '과장', dep: '인사', emp_num:'17-76543654', ph_num:'010-7778-9898'},
    { date: '2024.02.05', time: '21:50:54', name: '김동균', pos: '사장의개', dep: '노예', emp_num:'21-76077638', ph_num:'010-1111-7777'},
  ];

  // 행 렌더링 함수
  const renderRows = () => {
    if (showMore) {
      return rows.map(row => renderRow(row));
    } else {
      return rows.slice(0, 3).map(row => renderRow(row));
    }
  };

  // 개별 행 렌더링 함수
  const renderRow = (row) => (
    <tr key={row.date}>
      <td>{row.date}</td>
      <td>{row.time}</td>
      <td>{row.name}</td>
      <td>{row.pos}</td>
      <td>{row.dep}</td>
      <td>{row.emp_num}</td>
      <td>{row.ph_num}</td>
    </tr>
  );

  // 더 보기/감추기 핸들러
  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  // 이미지 슬라이드 토글 핸들러
  const handleSlideToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='UserLogTable'>
      <table>
        <thead>
          <tr>
            <th onClick={handleSlideToggle}>날짜</th>
            <th>시간</th>
            <th>이름</th>
            <th>직급</th>
            <th>부서</th>
            <th>사원번호</th>
            <th>연락처</th>
          </tr>
          <tr className={isOpen ? 'slide-open' : 'slide-closed'}>
            <td colSpan={7}>
              <img src="이미지_주소_또는_경로" alt="이미지 설정" />
            </td>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
      {/* 더 보기/감추기 버튼 */}
      <button onClick={handleToggleShowMore}>
        {showMore ? '감추기' : '더 보기'}
      </button>
    </div>
  );
};

export default ActivitiLog;
import React, { useState } from 'react';

const ActivitiLog = () => {
  // 더 보기 상태를 관리하는 상태 변수
  const [showMore, setShowMore] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // 행 데이터 배열
  const rows = [
    { date: '2024.02.01 13:50:51', name: '박범석', pos:'사장', dep: '경영'},
    { date: '2024.02.02 11:50:45', name: '한명훈', pos: '이사', dep: '회계'},
    { date: '2024.02.03 16:14:23', name: '박재욱', pos: '부장', dep: '법인'},
    { date: '2024.02.04 19:50:43', name: '박준', pos: '과장', dep: '인사'},
    { date: '2024.02.05 21:50:54', name: '김동균', pos: '사원', dep: '마케팅'},
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
      <td>{row.name}</td>
      <td>{row.pos}</td>
      <td>{row.dep}</td>

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
      <table className='activitiTable'>
        <thead>
          <tr>
            <th onClick={handleSlideToggle}>날짜</th>
            <th>이름</th>
            <th>직급</th>
            <th>부서</th>

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
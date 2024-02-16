import React, { useState } from 'react';

const UserLogListTable = () => {
  // 더 보기 상태를 관리하는 상태 변수
  const [showMore, setShowMore] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // 행 데이터 배열
  const rows = [
    { date: '2024.02.01', time : '13:50:51', res: '50(O)'},
    { date: '2024.02.02', time : '11:50:45', res: '0(X)'},
    { date: '2024.02.03', time : '16:14:23', res: '0(X)'},
    { date: '2024.02.04', time : '19:50:43', res: '50(O)'},
    { date: '2024.02.05', time : '21:50:54', res: '0(X)'},
    { date: '2024.02.06', time : '13:31:23', res: '50(O)'},
  ];

  // 행 렌더링 함수
  const renderRows = () => {
    if (showMore) {
      return rows.map(row => renderRow(row));
    } else {
      return rows.slice(0, 5).map(row => renderRow(row));
    }
  };

  // 개별 행 렌더링 함수
  const renderRow = (row) => (
    <tr key={row.date}>
      <td className='userLogListTd'>{row.date}</td>
      <td className='userLogListTd'>{row.time}</td>
      <td className='userLogListTd'>{row.res}</td>

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
    <div className='userLogListTable'>
      <table className='userListTable'>
        <thead>
          <tr>
            <th className='userLogListTh'>날짜</th>
            <th className='userLogListTh'>시간</th>
            <th className='userLogListTh'>결과</th>

          </tr>
        </thead>
        <tbody onClick={handleSlideToggle}>
          {renderRows()}
          <tr className={isOpen ? 'slide-open' : 'slide-closed'}>
            <td colSpan={4}>
              <img src="이미지_주소_또는_경로" alt="이미지 설정" />
            </td>
          </tr>
        </tbody>
      </table>
      {/* 더 보기/감추기 버튼 */}
      <div className='moreButton' onClick={handleToggleShowMore}>
        {showMore ? '▲ 감추기' : '▼ 더보기'}
      </div>
    </div>
  );
};

export default UserLogListTable;
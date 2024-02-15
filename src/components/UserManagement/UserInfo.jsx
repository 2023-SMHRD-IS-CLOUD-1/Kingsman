import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const UserInfo = ({ userList, setSelected}) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const nav = useNavigate();
  const handleItemClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseInfo = () => {
      setSelectedUser(null);
};
  return (
    <div className='UserInfo'>
      <h2>사용자 관리</h2>
      {userList.length > 0 ? (
        <table>
            <thead>
            <tr>
                <th>이름</th>
                <th>직급</th>
                <th>부서</th>
            </tr>
            </thead>
            <tbody>
            {userList.map((result, index) => (
                <tr key={index} onClick={() => handleItemClick(result)}
                >
                    <td>{result.b_NAME}</td>
                    <td>{result.b_POSITION}</td>
                    <td>{result.b_DEPS}</td>
                </tr>
            ))}
            </tbody>
        </table>
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
      {selectedUser && (
        <div className="user-info-popup">
          <p>{selectedUser.b_NAME} 님에 대한 정보</p>
             <table>
                <tr>
                    <td>이름</td>
                    <td>{selectedUser.b_NAME}</td>
                    <td>직급</td>
                    <td>{selectedUser.b_POSITION}</td>
                </tr>
                <tr>
                    <td>부서</td>
                    <td>{selectedUser.b_DEPS}</td>
                    <td>사번</td>
                    <td>{selectedUser.b_EMPNO}</td>
                </tr>
                <tr>
                    <td>연락처</td>
                    <td>{selectedUser.b_PHONE}</td>
                    <td>가입 일자</td>
                    <td>{selectedUser.b_DATE.slice(0,10)}</td>
                </tr>
             </table>
            <br/>
          <div>
            <Button variant='secondary' onClick={() => { nav('/UserModify', { state: { selectedUser } }) }}>수정</Button>
            <Button variant='secondary' onClick={() => { if (window.confirm('정말 삭제하시겠습니까?')) { setSelected(selectedUser.b_ID); handleCloseInfo(); } }}>삭제</Button>
            <Button variant='secondary' onClick={handleCloseInfo}>닫기</Button>

          </div>
        </div>
      )}
    </div>
  );
}

export default UserInfo;

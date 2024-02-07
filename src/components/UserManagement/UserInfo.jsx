import React, { useState } from 'react';

const UserInfo = ({ userList, userSearch }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleItemClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseInfo = () => {
    setSelectedUser(null);
  };

  return (
    <div className='UserInfo'>
      <h2>사용자 정보</h2>
      {userList.length > 0 ? (
        <ul>
          {userList.map((result, index) => (
            <li key={index}>
              <div onClick={() => handleItemClick(result)}>
                {result}
              </div>
              {selectedUser === result && (
                <div className="user-info-popup">
                  <p>{result}에 대한 정보</p>
                  <button onClick={handleCloseInfo}>닫기</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
}

export default UserInfo;

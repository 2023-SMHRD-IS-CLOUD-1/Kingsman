import React from 'react';
import AdminHeader from '../AdminHome/AdminHeader';
import './UserModifyProfile.css';

const UserModifyProfile = () => {
  return (
    <div className='UserModifyProfile'>
      <AdminHeader />
      <div className='page-title' style={{textAlign:'center'}}>마이 페이지</div>
      <div className='input-container'>
        <div className='input-row'>
          <label>ID　　　　　</label>
          <input type='text' placeholder='ID를 입력해주세요' className='ump' />
        </div>
        <div className='input-row'>
          <label>PW 　　　　</label>
          <input type='password' placeholder='PW를 입력해주세요' className='ump' />
        </div>
        <div className='input-row'>
          <label>PW 확인　　</label>
          <input type='password' placeholder='PW를 입력해주세요' className='ump' />
        </div>
        <div className='input-row'>
          <label>이름　　　　</label>
          <input type='text' placeholder='이름을 입력해주세요' className='ump' />
        </div>
        <div className='input-row'>
          <label>개인 연락처　</label>
          <input type='text' placeholder='개인 연락처를 입력해주세요' className='ump' />
        </div>
      </div>
      <div className='button-container'>
        <button className='umbtn cancel-btn'>취소</button>
        <button className='umbtn modify-btn'>수정</button>
      </div>
    </div>
  );
};

export default UserModifyProfile;

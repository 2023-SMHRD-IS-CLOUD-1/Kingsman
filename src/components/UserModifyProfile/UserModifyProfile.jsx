import React, { useEffect, useState } from 'react';
import AdminHeader from '../AdminHome/AdminHeader';
import './UserModifyProfile.css';
import axios from 'axios';

const UserModifyProfile = () => {
  const [id, setId] = useState('');
  const [pw2, setPw2] = useState('');
  const [pw3, setPw3] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(false); // 비밀번호 일치 여부 상태

  useEffect(() => {
    setId(sessionStorage.getItem("user"));
  }, []);

  // 비밀번호와 비밀번호 확인이 일치하는지 확인하는 함수
  useEffect(() => {
    setPasswordMatch(pw2 === pw3);
  }, [pw2, pw3]);

  const sendData = () => {
    if (id === '' || pw2 === '' || pw3 === '') {
      alert('제대로 입력해주세요');
      return;
    } else if (!passwordMatch) {
      alert('새 비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    } else {
      const data = {
        b_ID: id,
        b_PW: pw2,
      };
      console.log('정보수정 데이터 : ', data);
      axios
        .post('http://localhost:8085/kingsman/UserModifyProfile', data, { withCredentials: true })
        .then((response) => {
          console.log('데이터 전송 성공:', response.data);
        })
        .catch((error) => {
          console.error('데이터 전송 중 오류:', error);
        });
    }
  };

  return (
    <div className='UserModifyProfile'>
      <AdminHeader />
      <div className='page-title' style={{ textAlign: 'center' }}>회원정보수정</div>
      <div className='input-container'>
        <div className='input-row'>
          <label></label>
          <input type='text' placeholder='ID를 입력해주세요' className='ump' value={id} readOnly />
        </div>
        <div className='input-row'>
          <label></label>
          <input type='password' placeholder='새 비밀번호' className='ump' value={pw2} onChange={(e) => setPw2(e.target.value)} />
        </div>
        <div className='input-row'>
          <label></label>
          <input type='password' placeholder='새 비밀번호 확인' className='ump' value={pw3} onChange={(e) => setPw3(e.target.value)} />
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        {pw2 === '' || pw3 === '' ? (
          <span style={{ color: 'black' }}>　</span>
        ) : pw3 !== '' && pw3 !== null ? (
          passwordMatch ? (
            <span style={{ color: 'green' }}>비밀번호가 일치합니다.</span>
          ) : (
            <span style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</span>
          )
        ) : null}
      </div>

      <br />
      <div className='button-container'>
        <button className='umbtn cancel-btn'>취소</button>
        <button className='umbtn modify-btn' onClick={sendData}>수정</button>
      </div>
    </div>
  );
};

export default UserModifyProfile;
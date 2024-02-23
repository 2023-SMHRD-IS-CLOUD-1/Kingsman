import React, { useState } from 'react';
import { useContext } from 'react';
import { SignUpContext } from '../../context/SignUpContext';

const SignUpInput = () => {
  const { setSignUpId, setSignUpPw, setSignUpRePw, setSignUpName,
    setSignUpDep, setSignUpPosition, setSignUpEmpno, setSignUpPhoneNumber, signUpEmpno, signUpPhoneNumber, signUpPw, signUpRePw } = useContext(SignUpContext);

  const [isVerified, setIsVerified] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true); // 비밀번호 일치 여부를 저장하는 상태

  const formatPhoneNumber = (value) => {
    const phoneNumberDigits = value.replace(/\D/g, '');
    if (phoneNumberDigits.length <= 10) {
      const formattedPhoneNumber = phoneNumberDigits.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
      return formattedPhoneNumber;
    } else {
      return phoneNumberDigits.slice(0, 11).replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    }
  };

  const handlePhoneNumberChange = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setSignUpPhoneNumber(formattedPhoneNumber);
  };

  const handlePasswordChange = (e) => {
    setSignUpPw(e.target.value);
    setPasswordMatch(e.target.value === signUpRePw);
  };

  const handleConfirmPasswordChange = (e) => {
    setSignUpRePw(e.target.value);
    setPasswordMatch(signUpPw === e.target.value);
  };

  const employnumber = (e) => {
    if (signUpEmpno.length === 6) {
      setIsVerified(true);
      alert('인증 완료');
    } else {
      alert('사원번호가 일치하지 않습니다.');
    }
  };

  return (
    <div className='signUpInput'>
      <div className="signup-form">
        <label htmlFor="userId" className="input-label">아이디*</label>
        <input type="text" id="userId" className="input-field"
          onChange={(e) => { setSignUpId(e.target.value) }} />
        {/* 다른 입력 필드 추가 가능 */}
        <label htmlFor="password" className="input-label">비밀번호*</label>
        <input type="password" id="password" className="input-field"
          onChange={handlePasswordChange} />
         <label htmlFor="confirmPassword" className="input-label">비밀번호 확인*</label>
        <input type="password" id="confirmPassword" className="input-field"
          onChange={handleConfirmPasswordChange} />
        <p id="passwordMatchMessage" style={{ color: passwordMatch ? 'green' : 'red', margin: '0px' }}>{!passwordMatch && signUpRePw ? '비밀번호가 일치하지 않습니다.' : '\u00A0'}</p>

        <label htmlFor="name" className="input-label">이름*</label>
        <input type="text" id="name" className="input-field"
          onChange={(e) => { setSignUpName(e.target.value) }} />

        <div className='departPosition'>
          <div>
            <label htmlFor="signUpDepartment" className="input-label">부서*</label>
            <select id="signUpDepartment" className="input-field"
              onChange={(e) => { setSignUpDep(e.target.value) }}>
              <option value="" disabled selected hidden>부서를 선택하세요</option>
              <option value="생산관리">생산관리</option>
              <option value="구매관리">구매관리</option>
              <option value="품질관리">품질관리</option>
              <option value="재고관리">재고관리</option>
              <option value="멘탈관리">맨탈관리</option>
              {/* 다른 부서 추가 가능 */}
            </select>
          </div>
          <div>
            <label htmlFor="signUpPosition" className="input-label">직급*</label>
            <select id="signUpPosition" className="input-field"
              onChange={(e) => { setSignUpPosition(e.target.value) }}>
              <option value="" disabled selected hidden>직급을 선택하세요</option>
              <option value="사원">사원</option>
              <option value="주임">주임</option>
              <option value="대리">대리</option>
              <option value="과장">과장</option>
              <option value="차장">차장</option>
              <option value="부장">부장</option>
              {/* 다른 직급 추가 가능 */}
            </select>
          </div>
        </div>
        <label htmlFor='employeeNumber' className='input-label'>
          사원번호*
        </label>
        <div style={{ display: 'flex' }}>
        <input
  type='number' // 숫자만 입력되도록 타입을 지정
  id='employeeNumber'
  className='input-field'
  value={signUpEmpno} // 입력값을 상태로 설정
  onChange={(e) => {
    // 최대 6자리로 제한
    const trimmedValue = e.target.value.slice(0, 6); // 최대 6자리까지만 입력하도록 함
    setSignUpEmpno(trimmedValue);
  }}
  max={999999} // 최대 입력값 설정
/>
          <button onClick={employnumber} id='authbtn' disabled={isVerified}>인증</button>
        </div>

        <label htmlFor="phoneNumber" className="input-label">핸드폰번호*</label>
        <input
          type="text"
          id="phoneNumber"
          className="input-field"
          value={signUpPhoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>
    </div>
  )
}

export default SignUpInput;
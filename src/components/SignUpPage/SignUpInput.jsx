import React from 'react'


const SignUpInput = () => {
  return (
    <div className='signUpInput'>
      <div className="signup-form">
        <label htmlFor="userId" className="input-label">아이디*</label>
        <input type="text" id="userId" className="input-field" />
        {/* 다른 입력 필드 추가 가능 */}
        <label htmlFor="password" className="input-label">비밀번호*</label>
        <input type="password" id="password" className="input-field" />

        <label htmlFor="confirmPassword" className="input-label">비밀번호 확인*</label>
        <input type="password" id="confirmPassword" className="input-field" />

        <label htmlFor="name" className="input-label">이름*</label>
        <input type="text" id="name" className="input-field" />

        <div className='departPosition'>
          <div>

            <label htmlFor="department" className="input-label">부서*</label>
            <select id="department" className="input-field">
              <option value="" disabled selected hidden>부서를 선택하세요</option>
              <option value="IT">IT</option>
              <option value="영업">영업</option>
              {/* 다른 부서 추가 가능 */}
            </select>
          </div>
          <div>

            <label htmlFor="position" className="input-label">직급*</label>
            <select id="position" className="input-field">
              <option value="" disabled selected hidden>직급을 선택하세요</option>
              <option value="사장">사장</option>
              <option value="과장">과장</option>
              {/* 다른 직급 추가 가능 */}
            </select>
          </div>
        </div>

        <label htmlFor="employeeNumber" className="input-label">사원번호*</label>
        <input type="text" id="employeeNumber" className="input-field" />

        <label htmlFor="phoneNumber" className="input-label">핸드폰번호*</label>
        <input type="text" id="phoneNumber" className="input-field" />
      </div>
    </div>
  )
}

export default SignUpInput
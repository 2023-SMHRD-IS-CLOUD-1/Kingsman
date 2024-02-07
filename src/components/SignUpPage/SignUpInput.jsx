import React from 'react'
import { useContext } from 'react'
import { SignUpContext } from '../../context/SignUpContext'


const SignUpInput = () => {

  const {setSignUpId,setSignUpPw,setSignUpRePw,setSignUpName,
    setSignUpDep,setSignUpPosition,setSignUpEmpno,setSignUpPhoneNumber}=useContext(SignUpContext)



  return (
    <div className='signUpInput'>
      <div className="signup-form">
        <label htmlFor="userId" className="input-label">아이디*</label>
        <input type="text" id="userId" className="input-field" 
        onChange={(e)=>{setSignUpId(e.target.value)}}/>
        {/* 다른 입력 필드 추가 가능 */}
        <label htmlFor="password" className="input-label">비밀번호*</label>
        <input type="password" id="password" className="input-field" 
        onChange={(e)=>{setSignUpPw(e.target.value)}}/>

        <label htmlFor="confirmPassword" className="input-label">비밀번호 확인*</label>
        <input type="password" id="confirmPassword" className="input-field" 
        onChange={(e)=>{setSignUpRePw(e.target.value)}}/>

        <label htmlFor="name" className="input-label">이름*</label>
        <input type="text" id="name" className="input-field" 
        onChange={(e)=>{setSignUpName(e.target.value)}}/>

        <div className='departPosition'>
          <div>

            <label htmlFor="signUpDepartment" className="input-label">부서*</label>
            <select id="signUpDepartment" className="input-field" 
            onChange={(e)=>{setSignUpDep(e.target.value)}}>
              <option value="" disabled selected hidden>부서를 선택하세요</option>
              <option value="IT">IT</option>
              <option value="영업">영업</option>
              {/* 다른 부서 추가 가능 */}
            </select>
          </div>
          <div>

            <label htmlFor="signUpPosition" className="input-label">직급*</label>
            <select id="signUpPosition" className="input-field"
            onChange={(e)=>{setSignUpPosition(e.target.value)}}>
              <option value="" disabled selected hidden>직급을 선택하세요</option>
              <option value="사장">사장</option>
              <option value="과장">과장</option>
              {/* 다른 직급 추가 가능 */}
            </select>
          </div>
        </div>

        <label htmlFor="employeeNumber" className="input-label">사원번호*</label>
        <input type="text" id="employeeNumber" className="input-field" 
        onChange={(e)=>{setSignUpEmpno(e.target.value)}}/>

        <label htmlFor="phoneNumber" className="input-label">핸드폰번호*</label>
        <input type="text" id="phoneNumber" className="input-field" 
        onChange={(e)=>{setSignUpPhoneNumber(e.target.value)}}/>
      </div>
    </div>
  )
}

export default SignUpInput
import React from 'react'
import SignUpHeader from './SignUpHeader'
import SignUpUser from './SignUpUser'
import { SignUpContext } from '../../context/SignUpContext'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

  const nav = useNavigate();

  const [signUpId, setSignUpId] = useState('');
  const [signUpPw, setSignUpPw] = useState('');
  const [signUpRePw, setSignUpRePw] = useState('');
  const [signUpName, setSignUpName] = useState('');
  const [signUpDep, setSignUpDep] = useState('');
  const [signUpPosition, setSignUpPosition] = useState('');
  const [signUpEmpno, setSignUpEmpno] = useState('');
  const [signUpPhoneNumber, setSignUpPhoneNumber] = useState('');
  

  const handleSignUpButton = () =>{
    console.log("회원가입 버튼 클릭!!");
    const signUpUser ={
      b_ID : signUpId, 
      b_PW : signUpPw, 
      b_NAME : signUpName, 
      b_DEPS : signUpDep, 
      b_POSITION : signUpPosition, 
      b_EMPNO : signUpEmpno, 
      b_PHONE : signUpPhoneNumber
    }

    axios.post('http://localhost:8085/kingsman/signUp', signUpUser, {withCredentials : true})
    .then(res => {
      console.log("회원가입 성공", res);
      nav('/')
    })
    .catch(error =>{
      console.log("회원가입 오류", error);
    })


  }



  return (
    <SignUpContext.Provider
      value={{
        setSignUpId,signUpId,
        setSignUpPw,signUpPw,
        setSignUpRePw,signUpRePw,
        setSignUpName,signUpName,
        setSignUpDep,signUpDep,
        setSignUpPosition,signUpPosition,
        setSignUpEmpno,signUpEmpno,
        setSignUpPhoneNumber,signUpPhoneNumber,
        handleSignUpButton
      }}
    >
      <div>
        <SignUpHeader />
        <SignUpUser />
      </div>
    </SignUpContext.Provider>
  )
}

export default SignUp
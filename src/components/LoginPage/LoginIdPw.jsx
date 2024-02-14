import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
import { Button } from 'react-bootstrap'
const LoginIdPw = () => {

  const { setLoginId, setLoginPw, handleLoginButton } = useContext(LoginContext);



  return (
    <>

      <input type='text' placeholder='아이디' className='loginIdInput'
        onChange={(e) => { setLoginId(e.target.value) }} /> 

      <input type='password' placeholder='비밀번호' className='loginPwInput'
        onChange={(e) => { setLoginPw(e.target.value) }} />

      <div className='loginButton'>
        <Button className='loginButton' variant="outline-success"
          onClick={handleLoginButton}>로그인</Button>{' '}
      </div>
    </>
  )
}

export default LoginIdPw
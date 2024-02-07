import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'

const LoginIdPw = () => {

  const {setLoginId, setLoginPw}= useContext(LoginContext);



  return (
    <div>
        
        <input type='text' placeholder='아이디' className='loginIdInput'
        onChange={(e)=>{setLoginId(e.target.value)}}/> <br/>
        
        <input type='password' placeholder='비밀번호' className='loginPwInput'
        onChange={(e)=>{setLoginPw(e.target.value)}}/>
    </div>
  )
}

export default LoginIdPw
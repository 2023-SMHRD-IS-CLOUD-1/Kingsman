import React from 'react'
import LoginIdPw from './LoginIdPw'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'

const LocalLogin = () => {

  const {handleLoginButton}= useContext(LoginContext);
 



  return (
    <div className='localLogin'>
      <div>
        <LoginIdPw />
      </div>
      <div style={{display:'flex', textAlign:'center',justifyContent:"center"}}>
        <p onClick={handleLoginButton}>로그인</p>
        <Link to='/signUp'>회원가입</Link>
      </div>
    </div>
  )
}

export default LocalLogin
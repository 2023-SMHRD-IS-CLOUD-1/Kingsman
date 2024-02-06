import React from 'react'
import LoginIdPw from './LoginIdPw'
import {Link} from 'react-router-dom'

const LocalLogin = () => {
  return (
    <div className='localLogin'>
      <div>
        <LoginIdPw />
      </div>
      <div>
        <Link to='/signUp'>회원가입</Link>
      </div>
    </div>
  )
}

export default LocalLogin
import React from 'react'

const LoginIdPw = () => {
  return (
    <div>
        
        <input type='text' placeholder='아이디'
        style={{ width: '200px', height: '40px', marginBottom:'5px',
        borderColor: 'limegreen', borderWidth: '2px' }} /> <br/>
        
        <input type='password' placeholder='비밀번호' 
        style={{ width: '200px', height: '40px',
        borderColor: 'limegreen', borderWidth: '2px' }}/>
    </div>
  )
}

export default LoginIdPw
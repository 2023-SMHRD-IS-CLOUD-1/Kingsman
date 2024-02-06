import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'

const SignUpButton = () => {
  return (
    <div className='signUpButton'>
      <Button className='joinButton' variant="outline-success" >회원가입</Button>{' '}
    </div>
  )
}

export default SignUpButton
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import { useContext } from 'react';
import { SignUpContext } from '../../context/SignUpContext';

const SignUpButton = () => {

  const {handleSignUpButton}= useContext(SignUpContext)


  return (
    <div className='signUpButton'>
      <Button className='joinButton' variant="outline-success" 
      onClick={handleSignUpButton}>회원가입</Button>{' '}
    </div>
  )
}

export default SignUpButton
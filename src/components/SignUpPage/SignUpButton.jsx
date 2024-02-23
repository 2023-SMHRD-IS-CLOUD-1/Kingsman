import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { SignUpContext } from '../../context/SignUpContext';

const SignUpButton = () => {
  const { handleSignUpButton } = useContext(SignUpContext);

  return (
    <div className='signUpButton' style={{ marginTop: '20px' }}>
      <Button className='joinButton' variant="outline-success" onClick={handleSignUpButton}>
        회원가입
      </Button>
    </div>
  );
};

export default SignUpButton;
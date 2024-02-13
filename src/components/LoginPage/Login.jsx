import React from 'react'
import UserHeader from './UserHeader'
import LoginLogo from './LoginLogo'
import LoginMain from './LoginMain'
import { LoginContext } from '../../context/LoginContext'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const [loginId, setLoginId] = useState('');
    const [loginPw, setLoginPw] = useState('');
    const nav = useNavigate();

    const handleLoginButton = () => {
        console.log("로그인");
        console.log(loginId);
        console.log(loginPw);

        const loginUserIdPw = {
            b_ID: loginId,
            b_PW: loginPw
        }
        axios.post('http://localhost:8085/kingsman/login', loginUserIdPw, { withCredentials: true })
        .then(res => {
            console.log("로그인 성공", res);
            nav('/UserTowelCount')

        })
        .catch(error => {
            console.log("로그인 오류", error);
        })


    }
  

    // useEffect(() => {
       

    // }, [handleLoginButton])




    return (

        <LoginContext.Provider
            value={{
                loginId,
                setLoginId,
                loginPw,
                setLoginPw,
                handleLoginButton
            }}
        >

            <div className='loginPageContainer'>
                <UserHeader />
                <LoginLogo />
                <LoginMain />
            </div>
        </LoginContext.Provider>
    )
}

export default Login
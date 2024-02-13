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

        const loginUserIdPw = {
            b_ID: loginId,
            b_PW: loginPw
        }
        axios.post('http://localhost:8085/kingsman/login', loginUserIdPw, { withCredentials: true })
            .then(res => {
                console.log("통신 성공", res);
                if (res.data) {
                    console.log("값 들어있음");
                    sessionStorage.setItem("user", res.data)
                    console.log(sessionStorage.getItem("user"));
                    if (res.data == "Admin") {
                        nav("/Dashboard")
                    } else {
                        nav("/UserTowelCount")
                    }
                } else {
                    console.log("null");
                    alert("로그인 실패!!")
                }

            })
            .catch(error => {
                console.log("통신 오류", error);
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
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
        axios.post('http://43.201.66.47:8085/kingsman/login', loginUserIdPw, { withCredentials: true })
            .then(res => {
                if (res.data) {
                    sessionStorage.setItem("user", res.data)
                    if (res.data == "Admin") {
                        nav("/Dashboard")
                    } else {
                        nav("/UserCountTowel")
                    }
                } else {
                    alert("로그인 실패!!")
                }

            })
            .catch(error => {
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
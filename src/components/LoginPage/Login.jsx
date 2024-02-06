import React from 'react'
import UserHeader from './UserHeader'
import LoginLogo from './LoginLogo'
import LoginMain from './LoginMain'


const Login = () => {
    return (
        <div className='loginPageContainer'>
            <UserHeader />
            <LoginLogo />
            <LoginMain />
        </div>
    )
}

export default Login
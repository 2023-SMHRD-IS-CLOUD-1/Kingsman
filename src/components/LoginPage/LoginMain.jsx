import React from 'react'
import LocalLogin from './LocalLogin'
import NaverLogin from './NaverLogin'

const LoginMain = () => {
    return (
        <div style={{ height: "290px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
            <LocalLogin />
            <NaverLogin />
        </div>
    )
}

export default LoginMain
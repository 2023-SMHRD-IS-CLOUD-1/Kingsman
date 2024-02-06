import React from 'react'
import LocalLogin from './LocalLogin'
import NaverLogin from './NaverLogin'

const LoginMain = () => {
    return (
        <div style={{ height: "320px" }}>
            <div style={{height:"50px"}}>
                <img src="https://befe.co.kr/data/bbsData/16454404861.png"
                style={{height:'100%'}} />
            </div>
            <LocalLogin />
            <NaverLogin />
        </div>
    )
}

export default LoginMain
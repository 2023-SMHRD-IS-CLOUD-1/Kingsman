import React from 'react'
import naverIcon from '../../image/naver.png'
import kakaoIcon from '../../image/kakao.png'
import googleIcon from '../../image/google.png'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NaverLogin = () => {

  const nav = useNavigate();


  const { naver } = window;
  const client_id = process.env.REREACT_APP_CLIENT_ID

  const naverLogin = new naver.LoginWithNaverId({
    clientId: 'HimgLp_GCske67Zajotz',
    callbackUrl: "http://localhost:3000/signUp",
    isPopup: true,
    loginButton: {
      color: "green",
      type: 1,
      height: "30"
    }
  })



  const naverApiLogin = () => {
    naverLogin.getLoginStatus((status) => {
      if (status) {
      } else {
      }
    })
  }

  useEffect(() => {
    naverLogin.init();
  }, []);

  return (
    <div className='snsLogin' style={{ height: "70px", marginTop:"20px"}}>
      <div>
        <p style={{ fontSize: '10px', marginBottom: '5px' }}>sns Login</p>
      </div>
      <div className='snsLoginButtons'>
        <div id='naverIdLogin'>
          <img src={naverIcon} 
            style={{ height: '40px', padding: '5px'}}
            onClick={naverApiLogin} />
        </div>
        <div>
          <img src={kakaoIcon} alt=""
            style={{ height: '40px', padding: '5px', marginLeft:'5px' }} />
        </div>
        <div>
          <img src={googleIcon} alt=""
            style={{ height: '40px', padding: '5px' }} />
        </div>
      </div>
    </div>
  )
}

export default NaverLogin
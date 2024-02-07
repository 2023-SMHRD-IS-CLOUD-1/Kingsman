import React from 'react'
import naverIcon from '../../image/naver.png'
import kakaoIcon from '../../image/kakao.png'
import googleIcon from '../../image/google.png'
import { useEffect } from 'react'
import { useNavigate} from 'react-router-dom'

const NaverLogin = () => {

  const nav = useNavigate();
  

  const{naver} = window;
  const client_id = process.env.REREACT_APP_CLIENT_ID

  const naverLogin = new naver.LoginWithNaverId({
    clientId : 'HimgLp_GCske67Zajotz',
    callbackUrl : "http://localhost:3000/signUp",
    isPopup : true,
    loginButton : {
      color : "green",
      type : 1,
      height : "30"
    }
  })

  

  const naverApiLogin = ()=>{
    naverLogin.getLoginStatus((status)=>{
      if(status) {
        console.log("성공", naverLogin.user);
      }else{
        console.log("실패");
        console.log(naver);
      }
      console.log(naverLogin);
    })
  }

  useEffect(() => {
    naverLogin.init();
    console.log("init!");
  }, []);

  return (
    <div className='snsLogin' style={{ height:"70px"}}>
      <div id='naverIdLogin'>
        <img src={naverIcon} alt="" 
      style={{height:'40px', padding:'5px'}}
      onClick={naverApiLogin} />
      </div>
      <div>
      <img src={kakaoIcon} alt="" 
      style={{height:'40px', padding:'5px'}}/>
      </div>
      <div>
      <img src={googleIcon} alt="" 
      style={{height:'40px', padding:'5px'}}/>
      </div>
    </div>
  )
}

export default NaverLogin
import React from 'react'
import bamboo from '../../image/bamboo.gif'
const LoginLogo = () => {
  return (
    <div className='loginLogoContainer'>
    <div style={{ height : "224px"}}>
      <img src={bamboo} alt="" style={{marginRight:"70px"}}/>
  
    </div>
     <div style={{height:"50px"}}>
     <img src="https://befe.co.kr/data/bbsData/16454404861.png"
     style={{height:'100%'}} />
 </div>
 </div>
  )
}

export default LoginLogo
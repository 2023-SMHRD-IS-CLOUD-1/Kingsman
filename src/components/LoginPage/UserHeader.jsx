import React from 'react'
import letsLogo from '../../image/LETSLOGO.png'
const UserHeader = () => {
  return (
    <div className='userHeader'>
    <img src={letsLogo} alt="" style={{height:"80%", marginTop:"15px", marginLeft:"10px"}}/>
    </div>
  )
}

export default UserHeader
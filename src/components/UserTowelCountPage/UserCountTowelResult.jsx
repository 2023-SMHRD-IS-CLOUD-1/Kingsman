import React from 'react'
import analyzing from '../../image/analyzing.png'
import {CircularProgress} from '@mui/material'

const UserCountTowelResult = () => {
  return (
    <div className='UserCountTowelResult'>
      {/* <img src={analyzing} style={{height:"40px", marginRight:"20px"}} /> */}
      <CircularProgress style={{height:"40px", marginRight:"20px", color:"gray"}}/>
      <p style={{margin:"0px", color:"gray"}}>분석중입니다....</p>
    </div>
  )
}

export default UserCountTowelResult
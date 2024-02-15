import React, { useContext } from 'react'
import log from '../../image/log.png'
import { UserCountTowelContext } from '../../context/UserCountTowelContext'

const UserCountTowelLogCheck = () => {

  const {handlerShowLog} = useContext(UserCountTowelContext)

  return (
    <div className='UserCountTowelLogCheck' onClick={handlerShowLog}>
        <img src={log} style={{height:"35px", marginRight:"10px"}} />
        <p style={{margin:"0px"}}>나의 기록 보기</p>
    </div>
  )
}

export default UserCountTowelLogCheck
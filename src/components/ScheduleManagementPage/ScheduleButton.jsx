import React, { useContext } from 'react'
import { ScheduleContext } from '../../context/ScheduleContext'

const ScheduleButton = () => {

 const {handlerScheduleButton} = useContext(ScheduleContext)

  return (
    <div className='ScheduleButton' onClick={handlerScheduleButton}>
        <div>일</div>
        <div>정</div>
        <div>입</div>
        <div>력</div>
    </div>
  )
}

export default ScheduleButton
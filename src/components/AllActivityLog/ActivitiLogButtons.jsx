import React from 'react'
import ModifyLog from './ModifyLog'
import { DeleteLog } from './DeleteLog'

const ActivitiLogButtons = () => {
  return (
    <div className='activitiLogButtons'>
      <ModifyLog/>
      <DeleteLog/>
    </div>
  )
}

export default ActivitiLogButtons
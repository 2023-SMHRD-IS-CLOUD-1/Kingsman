import React from 'react'
import UserLogListTable from './UserLogListTable'
import UserLogListEtc from './UserLogListEtc'

const UserLogList = () => {
  return (
    <div className='userLogList'>
      <UserLogListTable/>
      <UserLogListEtc></UserLogListEtc>
    </div>
  )
}

export default UserLogList
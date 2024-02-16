import React from 'react'
import UserLogDate from './UserLogDate'
import AdminHeader from '../AdminHome/AdminHeader.tsx'
import UserLogList from './UserLogList'

const UserActivityLog = () => {
  return (
    <div>
      <AdminHeader/>
      <UserLogDate />
      <UserLogList />
    </div>
  )
}

export default UserActivityLog
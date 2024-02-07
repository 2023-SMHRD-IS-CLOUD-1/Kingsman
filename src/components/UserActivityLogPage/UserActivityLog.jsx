import React from 'react'
import UserLogDate from './UserLogDate'
import UserMainHeader from './UserMainHeader'
import UserLogList from './UserLogList'

const UserActivityLog = () => {
  return (
    <div>
      <UserMainHeader />
      <UserLogDate />
      <UserLogList />
    </div>
  )
}

export default UserActivityLog
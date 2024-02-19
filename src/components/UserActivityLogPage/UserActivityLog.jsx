import React from 'react'
import UserMainHeader from './UserMainHeader';
import UserLogDate from './UserLogDate'
import UserLogList from './UserLogList'

const UserActivityLog = () => {
  return (
    <div>
      <UserMainHeader/>
      <UserLogDate />
      <UserLogList />
    </div>
  )
}

export default UserActivityLog
import React from 'react'
import Calendar from './Calendar'
import SearchSchedule from './SearchSchedule'
import AdminHeader from '../AdminHome/AdminHeader'
import AdminFooter from '../AdminHome/AdminFooter'
const ScheduleManagement = () => {
  return (
    <div>
        <AdminHeader />
        <Calendar />
        <SearchSchedule />
        <AdminFooter />
    </div>
  )
}

export default ScheduleManagement
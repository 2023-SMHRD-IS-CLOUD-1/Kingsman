import React from 'react'
import SearchActivitiLog from './SearchActivitiLog'
import UserActivitiLog from './UserActivitiLog'
import AdminHeader from '../AdminHome/AdminHeader'
import AdminFooter from '../AdminHome/AdminFooter'

const AllActivitiLog = ({onSearch}) => {


  return (
    <div >
      <AdminHeader />
      <SearchActivitiLog onSearch={onSearch}/>
      <UserActivitiLog />
      <AdminFooter />
    </div>
  )
}

export default AllActivitiLog
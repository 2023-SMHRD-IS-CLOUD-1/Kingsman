import React from 'react'
import ActivHeader from './ActivHeader'
import ActiveFooter from './ActiveFooter'
import SearchActivitiLog from './SearchActivitiLog'
import UserActivitiLog from './UserActivitiLog'

const AllActivitiLog = ({onSearch}) => {


  return (
    <div>
      <ActivHeader />
      <SearchActivitiLog onSearch={onSearch}/>
      <UserActivitiLog />
      <ActiveFooter />
    </div>
  )
}

export default AllActivitiLog
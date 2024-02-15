import React from 'react'
import AdminFooter from '../AdminHome/AdminFooter'
import AdminHeader from '../AdminHome/AdminHeader.tsx'
import TowelCountMain from '../UserTowelCount.jsx/TowelCountMain'

const TowelCount = () => {

  return (
    <div>
      <AdminHeader></AdminHeader>
      <TowelCountMain></TowelCountMain>
      <AdminFooter></AdminFooter>
    </div>
  )
}

export default TowelCount
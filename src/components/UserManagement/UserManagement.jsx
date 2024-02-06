import React, { useState } from 'react'
import AdminHeader from '../AdminHome/AdminHeader'
import AdminFooter from '../AdminHome/AdminFooter'
import SearchUser from './SearchUser'
import UserInfo from './UserInfo'

const UserManagement = () => {
  const [userSearch, setUserSearch] = useState([]);
  const [userList, setUserList] = useState([]);

  const handleSearch = (searchQuery, selectedCategory) => {
    // 여기서 사용자 정보를 가져오는 로직이나 API 호출 등을 수행
    // 예시로 간단하게 결과를 설정
    setUserSearch([searchQuery, selectedCategory]);
  };

  return (
    <div>
      <AdminHeader></AdminHeader>
      <SearchUser onSearch={handleSearch}></SearchUser>
      <UserInfo userSearch={userSearch} userList={userList} ></UserInfo>
      <AdminFooter></AdminFooter>

    </div>
  )
}

export default UserManagement
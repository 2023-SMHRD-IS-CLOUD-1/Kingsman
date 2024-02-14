import React, { useState } from 'react'
import AdminHeader from '../AdminHome/AdminHeader'
import AdminFooter from '../AdminHome/AdminFooter'
import SearchUser from './SearchUser'
import UserInfo from './UserInfo'
import axios from 'axios'

const UserManagement = () => {

  const [userList, setUserList] = useState([]);
  
  
  const handleSearch = (searchQuery, selectedCategory) => {
    var sendData = {
       "searchQuery": searchQuery,
       "category": selectedCategory
   };
   
    axios.post('http://localhost:8085/kingsman/UserManagement', 
    sendData,
  { withCredentials: true,
    headers: {'Content-type': 'application/json'},
   
  })
    .then(response => {
      setUserList(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error searching users:', error);
    });
 
  
  };

  return (
    <div>
      <AdminHeader></AdminHeader>
      <SearchUser onSearch={handleSearch}></SearchUser>
      <UserInfo userList={userList} ></UserInfo>
      <AdminFooter></AdminFooter>

    </div>
  )
}

export default UserManagement
import React, { useEffect, useState } from 'react'
import AdminHeader from '../AdminHome/AdminHeader.tsx'
import AdminFooter from '../AdminHome/AdminFooter'
import SearchUser from './SearchUser'
import UserInfo from './UserInfo'
import axios from 'axios'
const UserManagement = () => {

  const [userList, setUserList] = useState([]);
  const [selected, setSelected] = useState([]);
  const [sendData, setSendData] = useState({
    "searchQuery": '',
    "category": 'b_name'
})
  const[count, setCount] = useState(0);

  useEffect(() => {
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
  }, [sendData, count]);

  useEffect(() => {
    console.log(selected)
    axios.post('http://localhost:8085/kingsman/UserManagement2', 
    selected,
  { withCredentials: true,
    headers: {'Content-type': 'application/json'},
  }).then(setCount(count+1))
    .catch(error => {
      console.error('Error searching users:', error);
    });
  }, [selected]);
  
  const handleSearch = (searchQuery, selectedCategory) => {
    setSendData ({
       "searchQuery": searchQuery,
       "category": selectedCategory
   });
   
  
  };

  return (
    <div>
      <AdminHeader></AdminHeader>
      <SearchUser onSearch={handleSearch}></SearchUser>
      <UserInfo userList={userList} setSelected={setSelected}></UserInfo>
      <AdminFooter></AdminFooter>

    </div>
  )
}

export default UserManagement
import React, { useState } from 'react'
import { Avatar, Menu, MenuItem, IconButton } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import logo from '../../image/logo.png'
import { useNavigate } from 'react-router-dom';

const UserCountTowelHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const nav = useNavigate();
  return (
    <div className='userCountTowelHeader'>
      <div style={{ width: "25%" }}></div>
      <div style={{ width: "50%" }}>
        <h3 style={{ margin: "0px" }}> <img src={logo} alt="Towel King Logo" style={{ width: '110px', height: '40px', marginTop: '5px' }} /></h3>
      </div>
      <div className="avatarLogo">
      <IconButton
  size="large"
  aria-label="account of current user"
  aria-controls="menu-appbar"
  aria-haspopup="true"
  color="inherit"
  onClick={handleClick} // 이 부분 추가
>
  <AccountCircle />
</IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => {
            handleClose();
            nav('/Usermodifyprofile');
          }}>
            회원정보수정
          </MenuItem>
          <MenuItem onClick={() => {
            sessionStorage.removeItem("user");
            nav('/');
          }}>
            로그아웃
          </MenuItem>
        </Menu>
      </div>
    </div>
  )
}

export default UserCountTowelHeader

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Menu, MenuItem, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import logo from '../../image/logo.png'
import menuCamera from '../../image/menuCamera.png'

const UserCountTowelHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const nav = useNavigate();

  return (
    <div className='userCountTowelHeader'>
      <nav>
      <button className='backCamera' onClick={() => { nav('/usercounttowel') }} style={{ backgroundColor:'rgb(167, 221, 167)' ,backgroundImage: `url(${menuCamera})`, width: '25px', height: '25px', marginTop: '5px', border: 'none', backgroundSize: 'cover' }}></button>
      </nav>
      <div style={{ width: "11%" }}></div>
      <div style={{ width: "51%" }}>
        <h3 style={{ margin: "0px" }}> <img src={logo} alt="Towel King Logo" style={{ width: '110px', height: '40px', marginTop: '5px' }} /></h3>
      </div>
      <div className="avatarLogo">
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          onClick={handleClick}
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
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default UserCountTowelHeader;

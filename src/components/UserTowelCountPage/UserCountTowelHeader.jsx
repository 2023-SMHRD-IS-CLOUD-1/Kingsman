import React, { useState } from 'react'
import { Avatar, Menu, MenuItem, IconButton } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';

const UserCountTowelHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className='userCountTowelHeader'>
      <div style={{ width: "25%" }}></div>
      <div style={{ width: "50%" }}>
        <h3 style={{ margin: "0px" }}>Let's Count</h3>
      </div>
      <div className="avatarLogo">
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
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
  )
}

export default UserCountTowelHeader

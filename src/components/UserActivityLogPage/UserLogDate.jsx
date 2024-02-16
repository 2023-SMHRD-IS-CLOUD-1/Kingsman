import React, { useState } from 'react';
import { Button, TextField, Grid } from '@mui/material';

function UserLogDate() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const handleSearch = () => {
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
  };
  return (
    <div className='userLogDate'>
      <div className='searchDate' style={{marginLeft:"3px"}}>
          <div >
            <input
              className='startUserDate'
              label="Start Date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
            ~
            <input
              className='endUserDate'
              label="End Date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </div>
      </div>
        <div item xs={2}>
          <button className='dateSearch' onClick={handleSearch}>
            검색
          </button>
        </div>
      </div>
  );
}

export default UserLogDate;
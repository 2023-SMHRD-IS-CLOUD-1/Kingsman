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
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={4}>
          <TextField
            id="start-date"
            label="Start Date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </Grid>
        <div>~</div>
        <Grid item xs={4}>
          <TextField
            id="end-date"
            label="End Date"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <button className='dateSearch' variant="contained" color="primary" onClick={handleSearch} size="small">
            검색
          </button>
        </Grid>
      </Grid>
    </div>
  );
}

export default UserLogDate;
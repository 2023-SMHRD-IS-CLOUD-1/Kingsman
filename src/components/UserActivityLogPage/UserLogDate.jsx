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
  <div container spacing={2} alignItems="center" width={{width:"50%"}}>
      <div item xs={6}>
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
      </div>
      <div item xs={6}>
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
      </div>
      <div item xs={12}>
      <Button className='dateSearch' variant="contained" color="primary" onClick={handleSearch} size="small">
    Search
</Button>
      </div>
  </div>
  </div>
);
}

export default UserLogDate
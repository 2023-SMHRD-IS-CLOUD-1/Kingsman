import React, { useState } from 'react';
import { Button, TextField, Grid } from '@mui/material';

function SearchActivitiLog({ onSearch }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(startDate, endDate, selectedCategory, searchQuery); // 검색 결과를 부모 컴포넌트로 전달
  };

  return (
    <div className='searchActivitiLog'>
      <div className='searchDate'>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4}>
            <TextField
              id="start-date"
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
          </Grid>
        </Grid>
      </div>
      <div className='userSearch'>
        <select className='userCategory' onChange={handleCategoryChange} value={selectedCategory}>
          <option value="name">이름</option>
          <option value="position">직급</option>
          <option value="deps">부서</option>
        </select>
        <input
          className='searchBar'
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>검색</button>
      </div>
    </div>
  );
}

export default SearchActivitiLog;

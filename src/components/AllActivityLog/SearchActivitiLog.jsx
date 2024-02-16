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
    onSearch(startDate, endDate, selectedCategory, searchQuery);
  };

  return (
    <div className='searchActivitiLog'>
      <div className='searchDate' style={{marginLeft:"3px"}}>
          <div>
            <input
              className='startAdminDate'
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
              className='endAdminDate'
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
        <button className='searchButton' onClick={handleSearch}>검색</button>
      </div>
    </div>
  );
}

export default SearchActivitiLog;

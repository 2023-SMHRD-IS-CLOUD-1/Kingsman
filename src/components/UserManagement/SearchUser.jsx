import React, { useState } from 'react';

const SearchUser = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('b_name');
  
    const handleInputChange = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const handleCategoryChange = (e) => {
      setSelectedCategory(e.target.value);
    };
  
    const handleSearch = () => {
      onSearch(searchQuery, selectedCategory);
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        onSearch(searchQuery, selectedCategory);
      }
    };
    
  return (
    <div className='SearchUser'>
     <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="b_name">이름</option>
        <option value="b_position">직급</option>
        <option value="b_deps">부서</option>
        
      </select>
      <input type="text" value={searchQuery} onChange={handleInputChange} onKeyDown={handleKeyDown} />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
}

export default SearchUser;
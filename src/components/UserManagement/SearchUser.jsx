import React, { useState } from 'react';

const SearchUser = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all'); // 기본값 'all'
  
    const handleInputChange = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const handleCategoryChange = (e) => {
      setSelectedCategory(e.target.value);
    };
  
    const handleSearch = () => {
      onSearch(searchQuery, selectedCategory);
    };

  return (
    <div className='SearchUser'>
     <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="name">이름</option>
        <option value="position">직급</option>
        <option value="deps">부서</option>
        
      </select>
      <input type="text" value={searchQuery} onChange={handleInputChange} />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
}

export default SearchUser;
import React, { useState, useRef, useEffect } from 'react';
import './SearchBarDropdown.css'

const SearchBarWithDropdown = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const sampleWords = ['apple', 'banana', 'cherry', 'grape', 'orange'];
  const dropdownRef = useRef(null);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);

    // Filter the sampleWords based on the searchValue
    const filteredResults = sampleWords.filter((word) =>
      word.toLowerCase().startsWith(value.toLowerCase())
    );
    setSearchResults(filteredResults);
    setDropdownOpen(true);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
        placeholder="How can we help you?"
      />
      {isDropdownOpen && searchResults.length > 0 && (
        <ul className="dropdown" ref={dropdownRef}>
          {searchResults.map((result) => (
            <li key={result}>{result}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBarWithDropdown;
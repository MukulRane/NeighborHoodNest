import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBarDropdown.css";

const SearchBarWithDropdown = (props) => {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const passedServices = props.servicesKey;
  const dropdownRef = useRef(null);

  console.log("passedServices = " + passedServices);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);

    const filteredResults = passedServices.filter((category) => {
      const categoryMatches = category.categoryName
        .toLowerCase()
        .includes(value.toLowerCase());
      const subCategoryMatches = category.subCategories.some((subCategory) =>
        subCategory.subCategoryName.toLowerCase().includes(value.toLowerCase())
      );
      return categoryMatches || subCategoryMatches;
    });

    // const filteredResults = Object.keys(passedServices).filter((key) =>
    //   key.toLowerCase().startsWith(value.toLowerCase()) ||
    //   passedServices[key].some((val) => val.toLowerCase().startsWith(value.toLowerCase()))
    // );

    // const filteredResults = Object.keys(passedServices).filter((key) =>
    //   key.categoryName.toLowerCase().startsWith(value.toLowerCase()) ||
    //   passedServices.subCategories.some((val) => val.subCategoryName.toLowerCase().startsWith(value.toLowerCase()))
    // );
    setSearchResults(filteredResults);
    setDropdownOpen(true);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
          {searchResults.map((category) => (
            <li key={category._id}>
              <strong>{category.categoryName}</strong>
              {category.subCategories.map((subCategory) => (
                <div
                  key={subCategory.subCategoryID}
                  className="value"
                  onClick={() => {
                    setSearchValue(subCategory.subCategoryName);
                    navigate(`/serviceProviders?subCategoryId=${subCategory.subCategoryID}`);
                  }}
                >
                  &emsp;{subCategory.subCategoryName}
                </div>
              ))}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBarWithDropdown;

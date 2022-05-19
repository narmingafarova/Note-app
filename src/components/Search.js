import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ handleSearch }) => {
  return (
    <div className="search">
      <input
        onChange={(e) => handleSearch(e.target.value)}
        type="text"
        placeholder=" Type to search..."
      />
      <FaSearch className="search-icon" />
    </div>
  );
};

export default Search;

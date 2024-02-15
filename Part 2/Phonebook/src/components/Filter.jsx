
import React from "react";

const Filter = ({ filtered, handleFilterChange }) => {
  return (
    <div>
      <label htmlFor="filter">Filter by name:</label>
      <input
        type="text"
        id="filter"
        value={filtered}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;

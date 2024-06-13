import React from "react";
//this is for the filter for the map it has a prop handleFilterChange
const Filter = ({ handleFilterChange }) => {
  return (
    <section className="buttonContainer">
      <button
        className="filterBtn"
        onClick={() => handleFilterChange("countries")}
      >
        Countries
      </button>
      <button
        className="filterBtn"
        onClick={() => handleFilterChange("continents")}
      >
        Continents
      </button>
      <button className="filterBtn" onClick={() => handleFilterChange("")}>
        All
      </button>
    </section>
  );
};

export default Filter;

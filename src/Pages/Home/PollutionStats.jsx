import React from "react";
import oceanFactsData from "../../Data/101Facts.json";

console.log(oceanFactsData); // Check if the data is imported correctly

const Fact = ({ id, fact }) => (
  <li key={id} className="fact">{fact}</li>
);

const OceanFacts = () => {
  const { ocean_facts } = oceanFactsData;
  const allFacts = ocean_facts || [];

  return (
    <div className="ocean-facts">
      <h1>Ocean Facts</h1>
      <ul>
        {allFacts.map(({ id, fact }) => (
          <Fact key={id} id={id} fact={fact} />
        ))}
      </ul>
    </div>
  );
};

export default OceanFacts;

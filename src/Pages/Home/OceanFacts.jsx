import React, { useState } from "react";
import oceanFactsData from "../../Data/101Facts.json";

const Fact = ({ id, fact }) => (
  <li key={id} className="fact">
    {fact}
  </li>
);

const OceanFacts = () => {
  const { ocean_facts } = oceanFactsData;
  const [displayedFacts, setDisplayedFacts] = useState([]);

  const refreshFacts = () => {
    // Shuffle the array of facts
    const shuffledFacts = ocean_facts.sort(() => Math.random() - 0.5);
    // Take the first 10 shuffled facts
    const selectedFacts = shuffledFacts.slice(0, 10);
    setDisplayedFacts(selectedFacts);
  };

  // Initial loading of 10 random facts
  useState(refreshFacts);

  return (
    <div className="ocean-facts">
      <h1>Ocean Facts</h1>
      <ul>
        {displayedFacts.map(({ id, fact }) => (
          <Fact key={id} id={id} fact={fact} />
        ))}
      </ul>
      <button onClick={refreshFacts} style={{ cursor: "pointer" }}>
        More Facts
      </button>
    </div>
  );
};

export default OceanFacts;

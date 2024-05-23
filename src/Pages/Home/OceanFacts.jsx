import React, { useState, useEffect, useCallback } from "react";
import ocean_facts from "../../Data/101Facts.json";

// Single fact component
const Fact = ({ fact, icon }) => (
  <div className="fact">
    {icon && <span className="icon">{icon}</span>}
    <p>{fact}</p>
  </div>
);

// Main component to render 10 random facts
const OceanFacts = () => {
  const [facts, setFacts] = useState([]);
  const [displayedFacts, setDisplayedFacts] = useState([]);

  // Function to shuffle an array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Function to select 10 random facts
  const selectRandomFacts = useCallback(() => {
    const shuffledFacts = shuffleArray(facts);
    setDisplayedFacts(shuffledFacts.slice(0, 10));
  }, [facts]); // Adding facts as a dependency

  // Fetch facts from the JSON data on initial load
  useEffect(() => {
    if (ocean_facts && ocean_facts.facts && Array.isArray(ocean_facts.facts)) {
      setFacts(ocean_facts.facts);
    } else {
      console.error("Error loading facts from JSON data.");
    }
  }, []);

  // Select 10 random facts when the component mounts or when facts change
  useEffect(() => {
    if (facts.length > 0) {
      selectRandomFacts();
    }
  }, [facts, selectRandomFacts]); // Adding selectRandomFacts as a dependency

  return (
    <div className="ocean-facts">
      <h1>Ocean Facts</h1>
      {displayedFacts.length > 0 ? (
        displayedFacts.map(({ id, fact, icon }) => (
          <Fact key={id} fact={fact} icon={icon} />
        ))
      ) : (
        <p>Loading facts...</p>
      )}
      <button onClick={selectRandomFacts}>More Facts</button>
    </div>
  );
};

export default OceanFacts;

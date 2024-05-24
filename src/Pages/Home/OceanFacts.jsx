import React, { useState, useEffect, useCallback } from "react";
import oceanFactsData from "../../Data/101Facts.json";
import * as PhosphorIcons from "@phosphor-icons/react";

const Fact = ({ fact, IconComponent }) => (
  <li className="fact">
    {IconComponent && <IconComponent size={24} />}
    {fact}
  </li>
);

const OceanFacts = () => {
  const { ocean_facts } = oceanFactsData;
  const [displayedFacts, setDisplayedFacts] = useState([]);

  // Utility function to shuffle an array
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const refreshFacts = useCallback(() => {
    const shuffledFacts = shuffleArray(ocean_facts);
    const selectedFacts = shuffledFacts.slice(0, 10);
    setDisplayedFacts(selectedFacts);
  }, [ocean_facts]);

  useEffect(() => {
    refreshFacts();
  }, [refreshFacts]);

  return (
    <div className="paragraphStyles ">
      <h1 className="littleHeading">Ocean Facts</h1>  <button className="factsgenerate" onClick={refreshFacts} style={{ cursor: "pointer" }}>
        More Facts
      </button>
      <ul>
        {displayedFacts.map(({ id, fact, icon }) => {
          const IconComponent = PhosphorIcons[icon];
          return <Fact key={id} fact={fact} IconComponent={IconComponent} />;
        })}
      </ul>
    
    </div>
  );
};

export default OceanFacts;

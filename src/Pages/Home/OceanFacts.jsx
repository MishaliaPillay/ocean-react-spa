import React, { useState, useEffect, useCallback } from "react";
import oceanFactsData from "../../Data/101Facts.json";
import * as PhosphorIcons from "@phosphor-icons/react";

const Fact = ({ id, fact, IconComponent }) => (
  <li key={id} className="fact">
    {IconComponent && <IconComponent size={24} />}
    {fact}
  </li>
);

const OceanFacts = () => {
  const { ocean_facts } = oceanFactsData;
  const [displayedFacts, setDisplayedFacts] = useState([]);

  const refreshFacts = useCallback(() => {
    const shuffledFacts = ocean_facts.sort(() => Math.random() - 0.5);
    const selectedFacts = shuffledFacts.slice(0, 10);
    setDisplayedFacts(selectedFacts);
  }, [ocean_facts]);

  useEffect(() => {
    refreshFacts();
  }, [refreshFacts]);

  return (
    <div className="ocean-facts">
      <h1>Ocean Facts</h1>
      <ul>
        {displayedFacts.map(({ id, fact, icon }) => {
          const IconComponent = PhosphorIcons[icon];
          return <Fact key={id} id={id} fact={fact} IconComponent={IconComponent} />;
        })}
      </ul>
      <button className="facts" onClick={refreshFacts} style={{ cursor: "pointer" }}>
        More Facts
      </button>
    </div>
  );
};

export default OceanFacts;

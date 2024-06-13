import React, { useState, useEffect, useCallback } from "react";
import oceanFactsData from "../../Data/101Facts.json";
import * as PhosphorIcons from "@phosphor-icons/react";

// Component to display a single fact
const Fact = ({ fact, IconComponent }) => (
  <li className="fact">
    {/* Displaying an icon if provided */}
    {IconComponent && <IconComponent size={24} />}
    {/* Displaying the fact text */}
    {fact}
  </li>
);

const OceanFacts = () => {
  // Destructuring ocean facts from the imported JSON data
  const { ocean_facts } = oceanFactsData;

  //  This state to hold the displayed facts
  const [displayedFacts, setDisplayedFacts] = useState([]);

  //  This utility function to get random facts
  const getRandomFacts = useCallback(() => {
    // Shuffling the ocean facts array and selecting the first 10
    const shuffledFacts = ocean_facts
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
    // Updating the displayed facts state
    setDisplayedFacts(shuffledFacts);
  }, [ocean_facts]);

  // Effect to generate random facts when the component mounts
  useEffect(() => {
    getRandomFacts();
  }, [getRandomFacts]);

  return (
    <section className="paragraphStyles ">
      <h2 className="littleHeading">Ocean Facts</h2>

      <button
        className="factsgenerate"
        onClick={getRandomFacts}
        style={{ cursor: "pointer" }}
      >
        More Facts
      </button>

      <ul>
        {displayedFacts.map(({ id, fact, icon }) => {
          // Getting the corresponding icon component from the Phosphor Icons library
          const IconComponent = PhosphorIcons[icon];
          // Rendering a single fact component
          return <Fact key={id} fact={fact} IconComponent={IconComponent} />;
        })}
      </ul>
    </section>
  );
};

export default OceanFacts;

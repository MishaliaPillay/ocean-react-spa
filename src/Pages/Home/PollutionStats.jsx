import React from "react";
import pollutionData from "../../Data/PollutionStats.json";
import { Anchor } from "@phosphor-icons/react";
const PollutionStats = () => {
 // Flatten the nested array of pollution statistics and include a unique ID for each item
  const flatPollutionStats = pollutionData.pollutionStats.flatMap(
    (group, groupIndex) =>
      group.map((item) => ({ ...item, uniqueId: `${groupIndex}-${item.id}` }))
  );

  return (
    <section className="paragraphStyles">
      <h2 className="littleHeading">Pollution Statistics</h2>
      <ul className="stats">
        {flatPollutionStats.map((item) => (
          <li key={item.uniqueId}>
            <Anchor size={32} /> {item.fact}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PollutionStats;

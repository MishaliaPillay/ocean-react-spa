import React from "react";
import pollutionData from "../../Data/PollutionStats.json"; // adjust the path as needed

const PollutionStats = () => {
  // Flatten the nested array and include the nested index to ensure unique keys
  const flatPollutionStats = pollutionData.pollutionStats.flatMap(
    (group, groupIndex) =>
      group.map((item) => ({ ...item, uniqueId: `${groupIndex}-${item.id}` }))
  );

  return (
    <section>
      <h2>Pollution Statistics</h2>
      <ul className="stats">
        {flatPollutionStats.map((item) => (
          <li key={item.uniqueId}>{item.fact}</li>
        ))}
      </ul>
    </section>
  );
};

export default PollutionStats;

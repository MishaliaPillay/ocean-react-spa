import React, { useEffect, useState } from "react";
import sharksData from "../../../../Data/Sharks.json";

function Sharks() {
  const [sharks, setSharks] = useState([]);

  useEffect(() => {
    setSharks(sharksData.sharksData[0]); // Accessing the array of sharks from the JSON data
  }, []);

  return (
    <div>
      <h1>Sea sharks</h1>
      {sharks.length > 0 ? (
        sharks.map((shark, index) => (
          <div key={index}>
            <h2>{shark.name}</h2>
            <img
              src={require(`../../../../Images/Sharks/${shark.image}`)} // Importing images dynamically
              alt={shark.name}
            />
            <p>{shark.interesting_fact}</p>
            <h3>Physical Characteristics:</h3>
            <ul>
              <li>
                <strong>Average Length:</strong> {shark.average_length}
              </li>
              <li>
                <strong>Average Weight:</strong> {shark.average_weight}
              </li>
            </ul>
            <h3>Additional Information:</h3>
            <ul>
              {Object.entries(shark.additional_info).map(
                ([key, value], infoIndex) => (
                  <li key={infoIndex}>
                    <strong>{key}:</strong> {value}
                  </li>
                )
              )}
            </ul>
          </div>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default Sharks;

import React, { useEffect, useState } from "react";
import dolphinsData from "../../../Data/Dolphins.json";

const Dolphins = () => {
  const [dolphins, setDolphins] = useState([]);

  useEffect(() => {
    console.log(dolphinsData);
    setDolphins(dolphinsData.dolphinsData); // Remove [0] if dolphinsData.dolphinsData is an array of dolphins
  }, []);

  return (
    <div>
      <h1>Sea dolphins</h1>
      {dolphins.length > 0 ? (
        dolphins.map((dolphin, index) => (
          <div key={index}>
            <h2>{dolphin.name}</h2>
            <img
              src={require(`../../../Images/Dolphins/${dolphin.image}`)}
              alt={dolphin.name}
            />
            <p>{dolphin.interesting_fact}</p>
            {dolphin.additional_info && (
              <>
                <h3>Additional Information:</h3>
                <ul>
                  {Object.entries(dolphin.additional_info).map(
                    ([key, value], infoIndex) => (
                      <li key={infoIndex}>
                        <strong>{key}:</strong> {value}
                      </li>
                    )
                  )}
                </ul>
              </>
            )}
          </div>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Dolphins;

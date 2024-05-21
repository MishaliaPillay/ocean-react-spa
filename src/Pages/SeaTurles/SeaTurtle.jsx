import React, { useState, useEffect } from "react";
import turtlesData from "../../Data/Turtles.json"; // Ensure the path is correct

const SeaTurtle = () => {
  const [turtles, setTurtles] = useState([]);

  useEffect(() => {
    console.log("Loaded turtle data:", turtlesData);
    setTurtles(turtlesData.turtlesData[0]); // Accessing the first (and only) element of turtlesData array
  }, []);

  return (
    <div>
      <h1>Sea Turtles</h1>
      {turtles.length > 0 ? (
        turtles.map((turtle, index) => (
          <div key={index}>
            <h2>{turtle.name}</h2>
            <img
              src={`../../Images/Turtles/${turtle.image}`}
              alt={turtle.name}
            />
            <p>{turtle.interesting_fact}</p>
            {turtle.additional_info && (
              <>
                <h3>Additional Information:</h3>
                <ul>
                  {Object.entries(turtle.additional_info).map(
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

export default SeaTurtle;

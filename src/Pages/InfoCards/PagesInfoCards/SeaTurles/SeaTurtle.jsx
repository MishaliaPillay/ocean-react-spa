import React, { useState, useEffect } from "react";
import turtlesData from "../../../../Data/Turtles.json"; // Ensure the path is correct
import "./SeaTurtle.css"; // Import the CSS file

const SeaTurtle = () => {
  const [turtles, setTurtles] = useState([]);

  useEffect(() => {
    console.log("Loaded turtle data:", turtlesData);
    setTurtles(turtlesData.turtlesData[0]); // Accessing the first (and only) element of turtlesData array
  }, []);

  return (
    <section className="articles">
      <h1>Sea Turtles</h1>
      {turtles.length > 0 ? (
        turtles.map((turtle, index) => (
          <article key={index}>
            <div className="image-wrapper">
              <img
                src={require(`../../../../Images/Turtles/${turtle.image}`)}
                alt={turtle.name}
              />
            </div>
            <div className="caption-wrapper">
              <div className="caption">
                <h2>{turtle.name}</h2>
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
            </div>
          </article>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </section>
  );
};

export default SeaTurtle;

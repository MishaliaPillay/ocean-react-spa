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
    <section>
      <article className="beginning">
        {" "} <h1 className="cardTitle">Sea Turtles</h1>
        <p className="introParagraph ">
         
          Welcome to our Sea Turtle page! Dive into the world of these
          magnificent creatures with us. Explore their species, behaviors, and
          ecological importance. Let's embark on an exciting journey beneath the
          waves together!
        </p>
      </article>
      <section className="blogPost">
        {turtles.length > 0 ? (
          turtles.map((turtle, index) => (
            <article className="sectionContainer">
              <article key={index}>
                <div className="imageContainer">
                  {" "}
                  {/* Updated class name to match the CSS */}
                  <img
                    className="CardImg"
                    src={require(`../../../../Images/Turtles/${turtle.image}`)}
                    alt={turtle.name}
                  />
                </div>{" "}
                <section className="introParagraph">
                  {" "}
                  {/* Updated class name to match the CSS */}
                  <div className="blurbParagraph">
                    {" "}
                    {/* Updated class name to match the CSS */}
                    <h2>{turtle.name}</h2>
                    <p className="blurbParagraph">{turtle.interesting_fact}</p>
                    {turtle.additional_info && (
                      <>
                        <h3>Additional Information:</h3>
                        <ul className="referrences">
                          {" "}
                          {/* Updated class name to match the CSS */}
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
                </section>
              </article>
            </article>
          ))
        ) : (
          <p>Loading data...</p>
        )}
      </section>
    </section>
  );
};

export default SeaTurtle;

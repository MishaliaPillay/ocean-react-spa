import React, { useState, useEffect } from "react";
import turtlesData from "../../../../Data/Turtles.json"; // Ensure the path is correct
import "./SeaTurtle.css"; // Import the CSS file

const SeaTurtle = () => {
  // State  holds turtle data
  const [turtles, setTurtles] = useState([]);
  // Effect to fetch turtle data when the component mounts
  useEffect(() => {
    setTurtles(turtlesData.turtlesData[0]); // Accessing the first (and only) element of turtlesData array
  }, []);

  return (
    <section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#077fe8"
          fillOpacity="1"
          d="M0,96L40,117.3C80,139,160,181,240,170.7C320,160,400,96,480,64C560,32,640,32,720,74.7C800,117,880,203,960,202.7C1040,203,1120,117,1200,101.3C1280,85,1360,139,1400,165.3L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <article className="beginning">
        <h1 className="cardTitle">Sea Turtles</h1>
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
                <section className="imageContainer">
                  <img
                    className="CardImg"
                    src={require(`../../../../Images/Turtles/${turtle.image}`)}
                    alt={turtle.name}
                  />
                </section>
                <section className="introParagraph">
                  <section className="blurbParagraph">
                    <h2>{turtle.name}</h2>
                    <p className="blurbParagraph">{turtle.interesting_fact}</p>
                    {turtle.additional_info && (
                      <>
                        <ul>
                          {Object.entries(turtle.additional_info).map(
                            ([key, value], infoIndex) => (
                              <li key={infoIndex}>{value}</li>
                            )
                          )}
                        </ul>
                      </>
                    )}
                  </section>
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

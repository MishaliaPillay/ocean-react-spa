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
      <article className="introParagrapgh">
        
        <article className="blogContent"><h1 className="thirdHeading">7 Types of Sea Turtles in the Oceans</h1>
          <p className="blurbParagraph">
            Among the most fascinating creatures in the ocean are seven species
            of sea turtles, six of which are listed as endangered. These
            majestic sea reptiles can be found in every ocean on earth except
            the Arctic Ocean and the Antarctic region. Spending the majority of
            their lives migrating through vast stretches of ocean, sea turtles
            can travel thousands of miles in their lifetime, spending time on
            land only to lay, often over 100 eggs at a time. Although these
            prehistoric reptiles are calm, fascinating, and hold a delicate
            piece of the food web, their survival rate is incredibly low.
            Approximately only 1 in every 1,000 hatchlings reaches maturity –
            this does not include human intervention, which further puts these
            species in danger. Take a look at the list of the seven types of sea
            turtles below, become familiarised with them, and hopefully, you
            will begin to understand why these ocean turtles are worth saving.
          </p>
        </article>
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

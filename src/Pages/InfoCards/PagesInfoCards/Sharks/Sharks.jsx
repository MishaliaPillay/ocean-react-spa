import React, { useState, useEffect } from "react";
import sharksData from "../../../../Data/Sharks.json"; // Ensure the path is correct

const Sharks = () => {
  // State  holds shark data
  const [sharks, setSharks] = useState([]);
  // Effect to fetch sharks data when the component mounts
  useEffect(() => {
    setSharks(sharksData.sharksData[0]); // Accessing the array of sharks from the JSON data
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
        {" "}
        <h1 className="cardTitle">Sea Sharks</h1>
        <p className="introParagraph">
          Welcome to our Sea Sharks page! Explore the fascinating world of these
          apex predators. Learn about their species, behaviors, and importance
          in marine ecosystems. Let's dive deep into the realm of sharks
          together!
        </p>
      </article>
      <section className="blogPost">
        {sharks.length > 0 ? (
          sharks.map((shark, index) => (
            <article className="sectionContainer" key={index}>
              <article>
                <div className="imageContainer">
                  <img
                    className="CardImg"
                    src={require(`../../../../Images/Sharks/${shark.image}`)}
                    alt={shark.name}
                  />
                </div>
                <section className="introParagraph">
                  <div className="blurbParagraph">
                    <h2>{shark.name}</h2>
                    <p className="blurbParagraph">{shark.interesting_fact}</p>
                    <h3 className="littleHeading">Physical Characteristics:</h3>
                    <ul>
                      <li>
                        <strong>Average Length:</strong> {shark.average_length}
                      </li>
                      <li>
                        <strong>Average Weight:</strong> {shark.average_weight}
                      </li>
                    </ul>

                    <ul>
                      {Object.entries(shark.additional_info).map(
                        ([key, value], infoIndex) => (
                          <li key={infoIndex}>{value}</li>
                        )
                      )}
                    </ul>
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

export default Sharks;

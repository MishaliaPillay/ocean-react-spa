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
                    <ul className="referrences">
                      <li>
                        <strong>Average Length:</strong> {shark.average_length}
                      </li>
                      <li>
                        <strong>Average Weight:</strong> {shark.average_weight}
                      </li>
                    </ul>
                    <h3 className="littleHeading">Additional Information:</h3>
                    <ul className="referrences">
                      {Object.entries(shark.additional_info).map(
                        ([key, value], infoIndex) => (
                          <li key={infoIndex}>
                            <strong>{key}:</strong> {value}
                          </li>
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

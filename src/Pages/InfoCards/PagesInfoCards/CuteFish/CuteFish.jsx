import React, { useState, useEffect } from "react";
import fishData from "../../../../Data/CuteFish.json"; // Ensure the path is correct

const CuteFish = () => {
  // State  holds fish data
  const [cuteFish, setCuteFish] = useState([]);
  // Effect to fetch cuteFish data when the component mounts
  useEffect(() => {
    setCuteFish(fishData.fishData[0]); // Accessing the array of cuteFish from the JSON data
  }, []);

  return (
    <section>
      <article className="beginning">
        {" "}
        <h1 className="cardTitle">Cute Fish</h1>
        <p className="introParagraph">
          Welcome to our Sea Sharks page! Explore the fascinating world of these
          apex predators. Learn about their species, behaviors, and importance
          in marine ecosystems. Let's dive deep into the realm of cuteFish
          together!
        </p>
      </article>
      <section className="blogPost">
        {cuteFish.length > 0 ? (
          cuteFish.map((fish, index) => (
            <article className="sectionContainer" key={index}>
              <article>
                <div className="imageContainer">
                  <img
                    className="CardImg"
                    src={require(`../../../../Images/Fish/${fish.image}`)}
                    alt={fish.name}
                  />
                </div>
                <section className="introParagraph">
                  <div className="blurbParagraph">
                    <h2>{fish.name}</h2>
                    <p className="blurbParagraph">{fish.interesting_fact}</p>
                    <h3 className="littleHeading">Physical Characteristics:</h3>
                    <ul>
                      <li>
                        <strong>Habitat:</strong> {fish.habitat}
                      </li>
                      <li>
                        <strong>Why it's cute:</strong> {fish.cute}
                      </li>
                    </ul>

                    <ul>
                      {Object.entries(fish.additional_info).map(
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

export default CuteFish;

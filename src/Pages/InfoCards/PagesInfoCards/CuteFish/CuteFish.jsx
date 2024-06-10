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
        <h1 className="cardTitle">
          9 Cutest Fish Species That Will Captivate Your Heart
        </h1>
        <p className="introParagraph">
          The ocean is a realm of wonders, teeming with a diverse array of
          marine life, each with its unique charm and appeal. Among the many
          fascinating creatures, some fish stand out for their undeniable
          cuteness and endearing features. From their vibrant colors to their
          quirky behaviors, these adorable and cutest fish species have captured
          the hearts of marine enthusiasts, divers, and even non-aquarists
          alike.
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

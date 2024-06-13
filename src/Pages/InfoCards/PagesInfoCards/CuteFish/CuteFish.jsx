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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#077fe8"
          fillOpacity="1"
          d="M0,96L40,117.3C80,139,160,181,240,170.7C320,160,400,96,480,64C560,32,640,32,720,74.7C800,117,880,203,960,202.7C1040,203,1120,117,1200,101.3C1280,85,1360,139,1400,165.3L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <article className="introParagrapgh">
        <article className="blogContent">
          <h1 className="thirdHeading">
          9 Cutest Fish Species That Will Captivate Your Heart
          </h1>
          <p className="blurbParagraph">
            The ocean is a realm of wonders, teeming with a diverse array of
            marine life, each with its unique charm and appeal. Among the many
            fascinating creatures, some fish stand out for their undeniable
            cuteness and endearing features. From their vibrant colors to their
            quirky behaviors, these adorable and cutest fish species have
            captured the hearts of marine enthusiasts, divers, and even
            non-aquarists alike.
          </p>
        </article>
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

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
      <article className="introParagrapgh">
        <article className="blogContent">
          <h1 className="thirdHeading">Top 10 Biggest Sharks Ranked</h1>
          <p className="blurbParagraph">
            The biggest sharks in the ocean include the whale shark, megamouth
            shark, and basking shark. You might be surprised to learn that the
            three largest sharks in the world’s oceans are all filter feeders
            despite their size. These massive creatures pose no threat to humans
            and subsist on incredibly small zooplankton while cruising passively
            around the ocean. Other large species of shark, like the thresher
            shark and Greenland shark, have other interesting attributes, like a
            whip-like tail and extreme longevity, that make them notable in
            addition to their size. On this list, we rank the biggest sharks in
            the world based on a combination of their length and weight.
          </p>
        </article>
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

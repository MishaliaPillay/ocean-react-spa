import React, { useEffect, useState } from "react";
import dolphinsData from "../../../../Data/Dolphins.json";

const Dolphins = () => {
  // State  holds dolphins data
  const [dolphins, setDolphins] = useState([]);
  // Effect to fetch dolphins data when the component mounts
  useEffect(() => {
    // Set dolphins data to the state
    setDolphins(dolphinsData.dolphinsData);
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
        <h1 className="cardTitle">Sea Dolphins</h1>
        <p className="introParagraph">
          Welcome to our Sea Dolphins page! Explore the fascinating world of
          dolphins with us. Learn about their species, behaviors, and unique
          characteristics. Let's dive into the ocean and discover the wonders of
          these intelligent creatures together!
        </p>
      </article>
      <section className="blogPost">
        {dolphins.length > 0 ? (
          dolphins.map((dolphin, index) => (
            <article className="sectionContainer" key={index}>
              <article>
                <article className="imageContainer">
                  <img
                    className="CardImg"
                    src={require(`../../../../Images/Dolphins/${dolphin.image}`)}
                    alt={dolphin.name}
                  />
                </article>
                <section className="introParagraph">
                  <article className="blurbParagraph">
                    <h2>{dolphin.name}</h2>
                    <p className="blurbParagraph">{dolphin.interesting_fact}</p>
                    <h3 className="littleHeading">Physical Characteristics:</h3>
                    <ul>
                      {Object.entries(dolphin.physical_characteristics).map(
                        ([key, value], infoIndex) => (
                          <li key={infoIndex}>{value}</li>
                        )
                      )}
                    </ul>
                    {dolphin.additional_info && (
                      <>
                        <h3 className="littleHeading">
                          Additional Information:
                        </h3>
                        <ul>
                          {Object.entries(dolphin.additional_info).map(
                            ([key, value], infoIndex) => (
                              <li key={infoIndex}>{value}</li>
                            )
                          )}
                        </ul>
                      </>
                    )}
                  </article>
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

export default Dolphins;

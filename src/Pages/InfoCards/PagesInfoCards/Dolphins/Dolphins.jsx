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
                    <ul className="referrences">
                      {Object.entries(dolphin.physical_characteristics).map(
                        ([key, value], infoIndex) => (
                          <li key={infoIndex}>
                            <strong>{key}:</strong> {value}
                          </li>
                        )
                      )}
                    </ul>
                    {dolphin.additional_info && (
                      <>
                        <h3 className="littleHeading">
                          Additional Information:
                        </h3>
                        <ul className="referrences">
                          {Object.entries(dolphin.additional_info).map(
                            ([key, value], infoIndex) => (
                              <li key={infoIndex}>
                                <strong>{key}:</strong> {value}
                              </li>
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

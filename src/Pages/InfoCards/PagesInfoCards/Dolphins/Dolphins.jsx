import React, { useEffect, useState } from "react";
import dolphinsData from "../../../../Data/Dolphins.json";


const Dolphins = () => {
  const [dolphins, setDolphins] = useState([]);

  useEffect(() => {
    console.log(dolphinsData);
    setDolphins(dolphinsData.dolphinsData);
  }, []);

  return (
    <section>
      <article className="beginning">
        <h1 className="cardTitle">Sea Dolphins</h1>
        <p className="introParagraph">
          Welcome to our Sea Dolphins page! Explore the fascinating world of dolphins with us. Learn about their species, behaviors, and unique characteristics. Let's dive into the ocean and discover the wonders of these intelligent creatures together!
        </p>
      </article>
      <section className="blogPost">
        {dolphins.length > 0 ? (
          dolphins.map((dolphin, index) => (
            <article className="sectionContainer" key={index}>
              <article>
                <div className="imageContainer">
                  <img
                    className="CardImg"
                    src={require(`../../../../Images/Dolphins/${dolphin.image}`)}
                    alt={dolphin.name}
                  />
                </div>
                <section className="introParagraph">
                  <div className="blurbParagraph">
                    <h2>{dolphin.name}</h2>
                    <p className="blurbParagraph">{dolphin.interesting_fact}</p>
                    <h3>Physical Characteristics:</h3>
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
                        <h3>Additional Information:</h3>
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

export default Dolphins;

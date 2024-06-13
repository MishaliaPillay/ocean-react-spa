import React, { useEffect, useState } from "react";
import whalesData from "../../../../Data/Whales.json";

const Whales = () => {
  // State  holds whale data
  const [whales, setWhales] = useState([]);
  // Effect to fetch whale data when the component moun
  useEffect(() => {
    setWhales(whalesData.whales);
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
            7 Unique Dolphin Types: The Ocean’s Most Captivating Creatures
          </h1>
          <p className="blurbParagraph">
            Dolphins are well known to be some of the friendliest, most
            fun-loving marine mammals, not to mention their incredibly high
            level of intelligence, hunting abilities, and unique communication
            styles. There are 43 species of dolphin that currently exist on the
            planet, of which 38 are ocean bound, with the remaining five species
            making their homes in freshwater rivers. Dolphins can be found in a
            large variety of shapes and sizes scattered throughout the world’s
            waterways. If you are a dolphin fan, then the following dolphin
            types are sure to get your excitement levels shooting through the
            roof.
          </p>
        </article>
      </article>
      <section className="blogPost">
        {whales.length > 0 ? (
          whales.map((whale, index) => (
            <article className="sectionContainer" key={index}>
              <article>
                <section className="imageContainer">
                  <img
                    className="CardImg"
                    src={require(`../../../../Images/Whales/${whale.image}`)}
                    alt={whale.name}
                  />
                </section>
                <section className="introParagraph">
                  <section className="blurbParagraph">
                    <h2>{whale.name}</h2>
                    <p className="blurbParagraph">{whale.interesting_fact}</p>
                    <h3 className="littleHeading">Where Found:</h3>
                    <p className="blurbParagraph">{whale.where_found}</p>
                    <h3 className="littleHeading">Additional Information:</h3>
                    <p className="blurbParagraph">
                      {whale.additional_information.description}
                    </p>
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

export default Whales;

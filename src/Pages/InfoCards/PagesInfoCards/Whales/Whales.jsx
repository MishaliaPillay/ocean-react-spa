import React, { useEffect, useState } from "react";
import whalesData from "../../../../Data/Whales.json";


const Whales = () => {
  const [whales, setWhales] = useState([]);

  useEffect(() => {
    setWhales(whalesData.whales);
  }, []);

  return (
    <section>
      <article className="beginning">
        <h1 className="cardTitle">Whales of the World</h1>
        <p className="introParagraph">
          Welcome to our Whales of the World page! Explore the majestic world of
          whales with us. Discover different whale species, their habitats, and
          fascinating facts. Let's embark on an adventure to learn more about
          these magnificent creatures!
        </p>
      </article>
      <section className="blogPost">
        {whales.length > 0 ? (
          whales.map((whale, index) => (
            <article className="sectionContainer" key={index}>
              <article>
                <div className="imageContainer">
                  <img
                    className="CardImg"
                    src={require(`../../../../Images/Whales/${whale.image}`)}
                    alt={whale.name}
                  />
                </div>
                <section className="introParagraph">
                  <div className="blurbParagraph">
                    <h2>{whale.name}</h2>
                    <p className="blurbParagraph">{whale.interesting_fact}</p>
                    <h3>Where Found:</h3>
                    <p>{whale.where_found}</p>
                    <h3>Additional Information:</h3>
                    <p>{whale.additional_information.description}</p>
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

export default Whales;
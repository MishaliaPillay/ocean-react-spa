import React, { useEffect, useState } from "react";
import whalesData from "../../../Data/Whales.json";

function Whales() {
  const [whales, setWhales] = useState([]);

  useEffect(() => {
    setWhales(whalesData.whales);
  }, []);

  return (
    <div>
      <h1>Whales of the World</h1>
      {whales.length > 0 ? (
        whales.map((whale, index) => (
          <div key={index}>
            <h2>{whale.name}</h2>
            <img
              src={require(`../../../Images/Whales/${whale.image}`)}
              alt={whale.name}
            />
            <p>{whale.interesting_fact}</p>
            <h3>Where Found:</h3>
            <p>{whale.where_found}</p>
            <h3>Additional Information:</h3>
            <p>{whale.additional_information.description}</p>
          </div>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default Whales;

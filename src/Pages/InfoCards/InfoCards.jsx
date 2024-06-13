import React from "react";
import { useNavigate } from "react-router-dom";
import "./InfoCards.css";
import sharkImage from "../../Images/Sharks/great_white_shark.jpg";
import turtleImage from "../../Images/Turtles/green_sea_turtle.jpg";
import dolphinImage from "../../Images/Dolphins/bottlenose_dolphin.jpg";
import whaleImage from "../../Images/Whales/beluga_whale.jpg";
import tipsImage from "../../Images/Conservation/conservation.jpg";
import fishImage from "../../Images/Fish/mandarinfish.jpg";

const InfoCards = () => {
  const navigate = useNavigate();

  const cardData = [
    {
      category: "sharks",
      title: "Sharks",
      description: "Learn about sharks and their habitats.",
      image: sharkImage,
    },
    {
      category: "seaturtle",
      title: "Turtles",
      description: "Explore the world of turtles and their conservation.",
      image: turtleImage,
    },
    {
      category: "dolphins",
      title: "Dolphins",
      description:
        "Discover fascinating facts about dolphins and their behavior.",
      image: dolphinImage,
    },
    {
      category: "whales",
      title: "Whales",
      description:
        "Dive into the world of whales and their incredible migrations.",
      image: whaleImage,
    },
    {
      category: "fish",
      title: "Cute Fish",
      description: "9 Cutest Fish Species That Will Captivate Your Heart",
      image: fishImage,
    },
    {
      category: "tips",
      title: "Tips",
      description: "Get valuable tips and advice for outdoor adventures.",
      image: tipsImage,
    },
  ];

  const navigateTo = (category) => {
    navigate(`/${category}`);
  };

  return (
    <section className="container">
      {cardData.map((card, index) => (
        <section className="cards" key={index}>
          <article
            className="cardItems"
            data-category={card.category}
            onClick={() => navigateTo(card.category)}
          >
            <section
              className="cardImages"
              style={{
                backgroundImage: `url(${card.image})`,
              }}
            ></section>
            <section className="cardInfor">
              <h2 className="cardTitlee">{card.title}</h2>
              <p className="card-intro">{card.description}</p>
            </section>
          </article>
        </section>
      ))}
    </section>
  );
};

export default InfoCards;

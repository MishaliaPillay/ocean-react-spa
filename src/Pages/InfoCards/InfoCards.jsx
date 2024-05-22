import React, { useEffect } from "react";
import "./InfoCards.css";
import sharkImage from "../../Images/Sharks/great_white_shark.jpg";
import turtleImage from "../../Images/Turtles/green_sea_turtle.jpg";
import dolphinImage from "../../Images/Dolphins/bottlenose_dolphin.jpg";
import whaleImage from "../../Images/Whales/beluga_whale.jpg";
import tipsImage from "../../Images/Conservation/conservation.jpg";

const InfoCards = () => {
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
      category: "tips",
      title: "Tips",
      description: "Get valuable tips and advice for outdoor adventures.",
      image: tipsImage,
    },
  ];

  useEffect(() => {
    const navigateTo = (category) => {
      window.location.href = `/${category}`;
    };

    const cards = document.querySelectorAll(".card-item");
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        const category = card.getAttribute("data-category");
        navigateTo(category);
      });
    });
  }, []);

  return (
    <section className="container">
      {cardData.map((card, index) => (
        <section className="cards" key={index}>
          <article className="card-item" data-category={card.category}>
            <section
              className="card-image"
              style={{
                backgroundImage: `url(${card.image})`,
              }}
            ></section>
            <section className="card-info">
              <h2 className="card-title">{card.title}</h2>
              <p className="card-intro">{card.description}</p>
            </section>
          </article>
        </section>
      ))}
    </section>
  );
};

export default InfoCards;

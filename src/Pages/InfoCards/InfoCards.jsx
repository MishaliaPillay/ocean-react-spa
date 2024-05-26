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
    // Function to navigate to a specified category
    const navigateTo = (category) => {
      // Update the window location to the URL corresponding to the category
      window.location.href = `/${category}`;
    };

    // Select all elements with the class name 'card-item'
    const cards = document.querySelectorAll(".card-item");

    // Iterate over each card element
    cards.forEach((card) => {
      // Add a click event listener to each card
      card.addEventListener("click", () => {
        // Get the value of the 'data-category' attribute of the clicked card
        const category = card.getAttribute("data-category");
        // Navigate to the URL corresponding to the category
        navigateTo(category);
      });
    });

    // Cleanup function to remove the event listeners when the component unmounts
    return () => {
      cards.forEach((card) => {
        card.removeEventListener("click", () => {
          const category = card.getAttribute("data-category");
          navigateTo(category);
        });
      });
    };
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

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

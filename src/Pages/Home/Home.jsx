import React from "react";
import "./Home.css"; // Ensure you have styles defined in this file
import SeaTurtle from "../../Video/SeaTurtle.mp4";
import { useNavigate } from "react-router-dom";
import InfoCards from "../InfoCards/InfoCards";
const Home = () => {
  const navigate = useNavigate();
  const handleClick = (route) => {
    navigate(route);
  };
  return (
    <div className="home">
      <div className="videoContainer">
        <video className="backgroundVideo" muted loop autoPlay>
          <source src={SeaTurtle} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="videoOverlay">
          <h1 className="homeTitle">Welcome to the Home Page</h1>
          <h2 className="additionalText">
            Your Overlay Text HereLorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam doloremque et cum, iusto quasi quos
            quaerat praesentium hic quam aspernatur porro fugit obcaecati
          </h2>
        </div>
      </div>
      <section> </section>
      <section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#077fe8"
            fill-opacity="1"
            d="M0,96L48,96C96,96,192,96,288,128C384,160,480,224,576,229.3C672,235,768,181,864,138.7C960,96,1056,64,1152,74.7C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <h2 className="headings">About Us</h2>
        <p className="blurb">
          ddddddddddddddddddddddipisicing elit. Quibusdam doloremque et cum,
          iusto quasi quos quaerat praesentium hic quam aspernatur porro fugit
          obcaecatidipisicing elit. Quibusdam doloremque et cum, iusto quasi
          quos quaerat praesentium hic quam aspernatur porro fugit
          obcaecatidipisicing elit. Quibusdam doloremque et cum, iusto quasi
          quos quaerat praesentium hic quam aspernatur porro fugit obcaecati
        </p>
      </section>
      <section>
        {" "}
        <h2
          className="headings"
          onClick={() => handleClick("/seaturtle")}
          style={{ cursor: "pointer" }}
        >
          cards tutleseeeeeeeeeeeeeeee
        </h2>
        <h2 className="headings">cheese</h2>
        <p className="blurb">
          ddddddddddddddddddddddipisicing elit. Quibusdam doloremque et cum,
          iusto quasi quos quaerat praesentium hic quam aspernatur porro fugit
          obcaecatidipisicing elit. Quibusdam doloremque et cum, iusto quasi
          quos quaerat praesentium hic quam aspernatur porro fugit
          obcaecatidipisicing elit. Quibusdam doloremque et cum, iusto quasi
          quos quaerat praesentium hic quam aspernatur porro fugit obcaecati
        </p>
      </section>
      <section>
        {" "}
        <h2
          className="headings"
          onClick={() => handleClick("/dolphins")}
          style={{ cursor: "pointer" }}
        >
          Dolphins
        </h2>
        <h2 className="headings">cheese</h2>
        <p className="blurb">
          ddddddddddddddddddddddipisicing elit. Quibusdam doloremque et cum,
          iusto quasi quos quaerat praesentium hic quam aspernatur porro fugit
          obcaecatidipisicing elit. Quibusdam doloremque et cum, iusto quasi
          quos quaerat praesentium hic quam aspernatur porro fugit
          obcaecatidipisicing elit. Quibusdam doloremque et cum, iusto quasi
          quos quaerat praesentium hic quam aspernatur porro fugit obcaecati
        </p>
      </section>
      <section>
        {" "}
        <h2
          className="headings"
          onClick={() => handleClick("/sharks")}
          style={{ cursor: "pointer" }}
        >
          Sharks
        </h2>
        <h2 className="headings">cheese</h2>
        <p className="blurb">
          ddddddddddddddddddddddipisicing elit. Quibusdam doloremque et cum,
          iusto quasi quos quaerat praesentium hic quam aspernatur porro fugit
          obcaecatidipisicing elit. Quibusdam doloremque et cum, iusto quasi
          quos quaerat praesentium hic quam aspernatur porro fugit
          obcaecatidipisicing elit. Quibusdam doloremque et cum, iusto quasi
          quos quaerat praesentium hic quam aspernatur porro fugit obcaecati
        </p>
      </section>
      <section>
        {" "}
        <h2
          className="headings"
          onClick={() => handleClick("/whales")}
          style={{ cursor: "pointer" }}
        >
          Whales
        </h2>
        <h2 className="headings">cheese</h2>
        <p className="blurb">
          ddddddddddddddddddddddipisicing elit. Quibusdam doloremque et cum,
          iusto quasi quos quaerat praesentium hic quam aspernatur porro fugit
          obcaecatidipisicing elit. Quibusdam doloremque et cum, iusto quasi
          quos quaerat praesentium hic quam aspernatur porro fugit
          obcaecatidipisicing elit. Quibusdam doloremque et cum, iusto quasi
          quos quaerat praesentium hic quam aspernatur porro fugit obcaecati
        </p>
      </section>
      <section>
        {" "}
        <h2
          className="headings"
          onClick={() => handleClick("/tips")}
          style={{ cursor: "pointer" }}
        >
          Tips
        </h2>
        <h2 className="headings">cheese</h2>
        <p className="blurb">
          ddddddddddddddddddddddipisicing elit. Quibusdam doloremque et cum,
          iusto quasi quos quaerat praesentium hic quam aspernatur porro fugit
          obcaecatidipisicing elit. Quibusdam doloremque et cum, iusto quasi
          quos quaerat praesentium hic quam aspernatur porro fugit
          obcaecatidipisicing elit. Quibusdam doloremque et cum, iusto quasi
          quos quaerat praesentium hic quam aspernatur porro fugit obcaecati
        </p>
      </section>
      <InfoCards />
    </div>
  );
};

export default Home;

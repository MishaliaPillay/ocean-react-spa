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

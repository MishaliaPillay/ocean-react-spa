import React from "react";
import "./Home.css"; // Ensure you have styles defined in this file
import SeaTurtle from "../../Video/SeaTurtle.mp4";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/seaturtle");
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
      <section>
        {" "}
        <h2
          className="headings"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          cards tutles
        </h2>
      </section>
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
          onClick={handleClick}
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
    </div>
  );
};

export default Home;

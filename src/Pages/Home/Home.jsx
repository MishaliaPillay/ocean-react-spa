import React from "react";
import "./Home.css"; // Ensure you have styles defined in this file
import SeaTurtle from "../../Video/SeaTurtle.mp4";
import { useNavigate } from "react-router-dom";
import InfoCards from "../InfoCards/InfoCards";
import { ArrowDown } from "@phosphor-icons/react";
import PollutionStats from "./PollutionStats";
import OceanFacts from "./OceanFacts";
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
            fillOpacity="1"
            d="M0,96L40,117.3C80,139,160,181,240,170.7C320,160,400,96,480,64C560,32,640,32,720,74.7C800,117,880,203,960,202.7C1040,203,1120,117,1200,101.3C1280,85,1360,139,1400,165.3L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
        <article className="iconCentre">
          <ArrowDown size={40} weight="bold" />
        </article>
        <InfoCards />

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
        <h2 className="headings">Why we care</h2>
        <PollutionStats />
      </section>
      <section>
        <h2 className="headings">Random Ocean Facts</h2>
        <OceanFacts />
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
    </div>
  );
};

export default Home;

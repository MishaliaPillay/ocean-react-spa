import React from "react";
import "./Home.css"; // Ensure you have styles defined in this file
import SeaTurtle from "../../Video/SeaTurtle.mp4";

import InfoCards from "../InfoCards/InfoCards";
import { ArrowDown } from "@phosphor-icons/react";
import PollutionStats from "./PollutionStats";
import OceanFacts from "./OceanFacts";
const Home = () => {
  return (
    <section className="home">
      <article className="videoContainer">
        <video className="backgroundVideo" muted loop autoPlay>
          <source src={SeaTurtle} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <article className="videoOverlay">
          <h1 className="homeTitle">Welcome</h1>
          <h2 className="additionalText">
            Meet the Ocean's Amazing Creatures: Dive Deep, Fall in Love, Take
            Action. Learn about the incredible animals that call the ocean home,
            and discover how you can help.
          </h2>
        </article>
      </article>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#077fe8"
            fillOpacity="1"
            d="M0,96L40,117.3C80,139,160,181,240,170.7C320,160,400,96,480,64C560,32,640,32,720,74.7C800,117,880,203,960,202.7C1040,203,1120,117,1200,101.3C1280,85,1360,139,1400,165.3L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
        <h2 className="headings">About Us</h2>{" "}
        <article className="textBlurb">
          <p className="blurb">
            Welcome to Ocean App! We're a passionate group of ocean enthusiasts
            dedicated to raising awareness about the vital role our oceans play
            in the health of our planet.
          </p>
          <p className="blurb">
            Our inspiration stems from the incredible work of Ocean Info.com.
            Their dedication to providing comprehensive information about the
            ocean world has ignited a fire within us to share this knowledge and
            inspire action.
          </p>
          <p className="blurb">
            We believe that by understanding the wonders of the ocean and the
            threats it faces, we can empower individuals to make a difference.
            Through compelling content, engaging visuals, and calls to action,
            we strive to:{" "}
          </p>
          <ul className="blurb">
            <li>
              <span className="important">Spread Awareness: </span>We want
              people to appreciate the ocean's beauty, diversity, and ecological
              significance.
            </li>
            <li>
              <span className="important">Educate and Empower:</span> We aim to
              provide accessible information about ocean conservation and the
              challenges it faces.
            </li>
            <li>
              <span className="important">Inspire Action:</span> We encourage
              visitors to take action in their everyday lives to protect our
              precious oceans.
            </li>
          </ul>

          <p className="blurb">
            Just like Ocean Info.com, we believe that a healthy ocean is
            essential for a healthy planet. By working together, we can ensure a
            brighter future for this vital ecosystem.
          </p>
          <p className="blurb">
            {" "}
            <span className="important">Join us on this journey!</span> Explore
            our website to learn more about the ocean, discover ways to get
            involved, and become an advocate for its protection.
          </p>
        </article>
      </section>{" "}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#077fe8"
          fillOpacity="1"
          d="M0,96L40,117.3C80,139,160,181,240,170.7C320,160,400,96,480,64C560,32,640,32,720,74.7C800,117,880,203,960,202.7C1040,203,1120,117,1200,101.3C1280,85,1360,139,1400,165.3L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <section>
        <h2 className="headings">Why we care</h2>
        <PollutionStats />
      </section>{" "}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#077fe8"
          fillOpacity="1"
          d="M0,96L40,117.3C80,139,160,181,240,170.7C320,160,400,96,480,64C560,32,640,32,720,74.7C800,117,880,203,960,202.7C1040,203,1120,117,1200,101.3C1280,85,1360,139,1400,165.3L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <section>
        <h2 className="headings">Random Ocean Facts</h2>
        <OceanFacts />
      </section>
    </section>
  );
};

export default Home;

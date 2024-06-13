import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import designData from "../../Data/Design.json";
import "./Design.css";

const Design = () => {
  const [designContent, setDesignContent] = useState([]);

  useEffect(() => {
    setDesignContent(designData.designContent);
  }, []);
  const navigate = useNavigate();
  const navigateToSection = (sectionIndex) => {
    navigate(`/design/${sectionIndex}`);
  };
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#077fe8"
          fillOpacity="1"
          d="M0,96L40,117.3C80,139,160,181,240,170.7C320,160,400,96,480,64C560,32,640,32,720,74.7C800,117,880,203,960,202.7C1040,203,1120,117,1200,101.3C1280,85,1360,139,1400,165.3L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <section className="introParagraph ">
        <h3 className="thirdHeading">Design Content</h3>
        <article className="blogContent">
          <p className="blurbParagraph ">
            Welcome to the Design Section of our Ocean app. This section
            provides a detailed overview of our design process, showcasing how
            we transformed initial concepts into a functional, engaging, and
            educational app.
          </p>
        </article>
      </section>
      <section className="container">
        {designContent.length > 0 ? (
          designContent.map((section, sectionIndex) => (
            <article className="cards" key={sectionIndex}>
              <section className="cardItems">
                <section className="cardInfor">
                  <h2 className="cardTitlee">{section.title}</h2>
                  <p className="blurbParagraph">{section.explanation}</p>
                  <button
                    className="readMore"
                    onClick={() => navigateToSection(sectionIndex)}
                  >
                    Read More
                  </button>
                </section>
              </section>
            </article>
          ))
        ) : (
          <p>Loading data...</p>
        )}
      </section>
    </>
  );
};

export default Design;

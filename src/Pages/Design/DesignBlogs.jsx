import React from "react";
import { useParams, Link } from "react-router-dom";
import designData from "../../Data/Design.json";
import "./Design.css";
import { ArrowLeft } from "@phosphor-icons/react";
const DesignBlogs = () => {
  const { id } = useParams();
  const section = designData.designContent[id];

  if (!section) {
    return <p>Section not found</p>;
  }

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#077fe8"
          fillOpacity="1"
          d="M0,96L40,117.3C80,139,160,181,240,170.7C320,160,400,96,480,64C560,32,640,32,720,74.7C800,117,880,203,960,202.7C1040,203,1120,117,1200,101.3C1280,85,1360,139,1400,165.3L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <article className="beginning">
        <h1 className="cardTitle">{section.title}</h1>
        <p className="introParagraph">{section.explanation}</p>
      </article>
      <section className="blogPost">
        <article className="blogContent">
          {Object.entries(section)
            .filter(([key]) => key.startsWith("part"))
            .map(([partKey, part], partIndex) => (
              <section key={partIndex}>
                <h3 className="littleHeadingDesign">{part.title}</h3>
                <p className="designParagraph">{part.description}</p>
                <p className="designParagraph">{part.description2}</p>
                <p className="designParagraph">{part.description3}</p>
                {part.images && (
                  <section className="image-gallery">
                    {part.images.map((image, imageIndex) => (
                      <figure key={imageIndex}>
                        <img
                          className="blogImgDesign"
                          src={require(`../../Images/Design/${image.src}`)}
                          alt={`Figure ${imageIndex + 1}`}
                        />
                        <figcaption className="blogImgCaption">
                          {image.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </section>
                )}
              </section>
            ))}
        </article>
      </section>
      <Link to="/design" className="backButton">
        <ArrowLeft size={32} />
        Back to Design
      </Link>
    </>
  );
};

export default DesignBlogs;

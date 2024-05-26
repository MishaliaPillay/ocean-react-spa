import React, { useEffect, useState } from "react";
import designData from "../../Data/Design.json"; // Ensure this path is correct
import "./Design.css";

const Design = () => {
  const [designContent, setDesignContent] = useState([]);

  useEffect(() => {
    setDesignContent(designData.designContent);
  }, []);

  return (
    <>
      <article className="beginning">
        <h1 className="cardTitle">Design Content</h1>
        <p className="introParagraph">
          Welcome to the Design Section of our Ocean app. This section provides
          a detailed overview of our design process, showcasing how we
          transformed initial concepts into a functional, engaging, and
          educational app. Here, we discuss the importance and significance of
          key design decisions, ensuring that each choice aligns with our goals
          of educating users about ocean conservation and promoting sustainable
          practices.
        </p>
      </article>
      {designContent.length > 0 ? (
        designContent.map((section, sectionIndex) => (
          <section className="blogPost" key={sectionIndex}>
            <article className="blogContent">
              <summary>
                <h2 className="biggerHeading">{section.title}</h2>
              </summary>
              <p className="designParagraph">{section.explanation}</p>
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
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default Design;

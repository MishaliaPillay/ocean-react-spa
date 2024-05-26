import React, { useEffect, useState } from "react";
import designData from "../../Data/Design.json";
import "./Design.css";

const Design = () => {
  // useState hook to manage the design content data fetched from the JSON file
  const [designContent, setDesignContent] = useState([]);

  // useEffect hook to handle side effects in the component
  // This effect runs once when the component mounts, due to the empty dependency array []
  useEffect(() => {
  

    // Update the state with the design content from the JSON file
    setDesignContent(designData.designContent);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <>
      =
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
      {/* Conditional rendering: display content if designContent has data, else show a loading message */}
      {designContent.length > 0 ? (
        // Map over the designContent array to dynamically render each section
        designContent.map((section, sectionIndex) => (
          // Each section is wrapped in a <section> tag with a unique key
          <section className="blogPost" key={sectionIndex}>
            <article className="blogContent">
              <summary>
                <h2 className="biggerHeading">{section.title}</h2>
              </summary>

              <p className="designParagraph">{section.explanation}</p>

              {/* Filter and map over the keys of the section object to find parts that start with "part" */}
              {Object.entries(section)
                .filter(([key]) => key.startsWith("part"))
                .map(([partKey, part], partIndex) => (
                  <section key={partIndex}>
                    <h3 className="littleHeadingDesign">{part.title}</h3>
                    {/* Display the descriptions of the part */}
                    <p className="designParagraph">{part.description}</p>
                    <p className="designParagraph">{part.description2}</p>
                    <p className="designParagraph">{part.description3}</p>

                    {/* Conditionally render the image gallery if the part contains images */}
                    {part.images && (
                      <section className="image-gallery">
                        {/* Map over the images array to display each image and its caption */}
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
        // Display a loading message if the design content data is not available
        <p>Loading data...</p>
      )}
    </>
  );
};

export default Design;

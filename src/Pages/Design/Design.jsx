import React, { useEffect, useState } from "react";
import designData from "../../Data/Design.json"; // Ensure this path is correct
import "./Design.css";

const Design = () => {
  const [designContent, setDesignContent] = useState([]);

  useEffect(() => {
    console.log(designData);
    setDesignContent(designData.designContent);
  }, []);

  return (
    <>
      <h1>Design Content</h1>
      {designContent.length > 0 ? (
        designContent.map((section, sectionIndex) => (
          <section className="blogPost" key={sectionIndex}>
            <article className="blogContent">
              <summary>
                <h2 className="biggerHeading">{section.title}</h2>
              </summary>
              <p className="designParagraph">{section.explanation}</p>
              {Object.keys(section)
                .filter((key) => key.startsWith("part"))
                .map((partKey, partIndex) => {
                  const part = section[partKey];
                  return (
                    <div key={partIndex}>
                      <h3 className="littleHeadingDesign">{part.title}</h3>
                      <p className="designParagraph">{part.description}</p>
                      <div className="image-gallery">
                        {part.images &&
                          part.images.map((image, imageIndex) => (
                            <figure key={imageIndex}>
                              <img
                                className="blogImg"
                                src={require(`../../Images/Essay/${image.src}`)}
                                alt={`Figure ${imageIndex + 1}`}
                              />
                              <figcaption className="blogImgCaption">
                                {image.caption}
                              </figcaption>
                            </figure>
                          ))}
                      </div>
                    </div>
                  );
                })}
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

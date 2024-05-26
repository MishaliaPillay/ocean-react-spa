import React from "react";
import "./Art.css";
const Art = () => {
  return (
    <>
      <section className="introParagraph ">
        <h3 classname="thirdHeading">Internet Art</h3>
        <article className="blogContent">
          <p className="blurbParagraph ">
            Welcome to my exploration of art in the digital age! This space is
            dedicated to pushing boundaries and utilizing the unique canvas of
            the internet. Dive into interactive experiences, ever-evolving
            creations, and art that thrives on connection and accessibility.
          </p>
        </article>
      </section>
      <section className="blogPost ">
        <article className="blogContent">
          <summary>
            <h3 classname="thirdHeading">Preparatory Work for Internet Art </h3>
          </summary>
          <h2 classname="secondHeading">Description</h2>
          <p className="blurbParagraph ">
            The internet art that will be made for this website site is like
            Heatmap 2.0. This will use data that is about how much plastic waste
            each country and continent discards into the ocean. It will show the
            data on a map of Earth (thus the Heatmap 2.0). This helps visualize
            the data a lot better as the user can immediately situate stats to a
            specific region.
          </p>
          <h2 classname="secondHeading">Further Information</h2>
          <p className="blurbParagraph ">
            This dataset is from a website called Kaggle and they make datasets
            for machine learning enthusiasts. They do this because they
            encourage designers to use real-world data to solve real world
            problems. This is aligned with the mission of this website which is
            to educate and inform people about the state of the ocean and how
            our actions affect sea life. Using this real-world dataset makes
            these difficult-to-understand stats from scientific documents more
            accessible and helps the general public gain quick insight into the
            problem. This will help motivate them to take action and consider
            practicing ways to conserve the ocean as in the article on this
            website.
          </p>
          <h2 classname="secondHeading">Technical constraints</h2>
          <p className="blurbParagraph ">
            The data format is in a CSV format. There are two ways to overcome
            this, the first is to use libraries like “papaparse” which converts
            the data into an array. The second format which seems more viable is
            to use an online converter and convert the data from CSV to JSON.
          </p>
          <p className="blurbParagraph ">
            The next technical constraint is getting the map and being able to
            plot the data on the map. These are a few mapping libraries,
            React-Leaflet, react-map-gl, and Google Maps React One of the
            easiest to use is React-Leaflet, I have done some research and will
            explain how I will use these components MapContainer, TileLayer,
            Marker, and Popup. Map container is the main component that serves
            as the container for the entire map and can allow zooming in
            features. TileLayer is a component that represents the base layer of
            the map, such as satellite imagery, street maps, or topographic
            maps. Marker represents a point of interest on the map, typically
            visualized as a pin or icon. Popup provides a pop-up window that
            displays information when a user clicks on a marker or another map
            element.
          </p>
          <h2 classname="secondHeading">References Discussion</h2>
          <p className="blurbParagraph ">
            The reference images show different ways of displaying plastic waste
            contributors, these range from info graphic to pie charts. Based on
            the lectures in class it is best to stay away from pie charts as
            they aren&apos;t always the most reliable and when done incorrectly
            it keeps the user guessing the values of each segment. What sets my
            internet art aside from the infographic is that it will be on a
            website and it will be interactive. The user can hover and see data
            stats and filter regions based on continents. This may lead to some
            surprising discoveries; an example is If the user believes that
            America produces the most amount of plastic waste but the data may
            reveal otherwise.
          </p>
          <figure>
            <img
              className="blogImg"
              src={require(`../../Images/Essay/art example 2.jpg`)}
              alt="Example 1"
            />
            <figcaption className="blogImgCaption">Example 1</figcaption>
          </figure>
          <figure>
            <img
              className="blogImg"
              src={require(`../../Images/Essay/art example.jpg`)}
              alt="Example 2"
            />
            <figcaption className="blogImgCaption">Example 2</figcaption>
          </figure>{" "}
          <figure>
            <img
              className="blogImg"
              src={require(`../../Images/Essay/highest-polluters-shareable.jpg`)}
              alt="Example 3"
            />
            <figcaption className="blogImgCaption">Example 3</figcaption>
          </figure>
        </article>
      </section>
    </>
  );
};

export default Art;

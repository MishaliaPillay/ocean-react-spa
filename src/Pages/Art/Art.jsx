import React from "react";
import "./Art.css";
import Map from "./Map";
const Art = () => {
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
        <h3 className="thirdHeading">Internet Art</h3>
        <article className="blogContent">
          <p className="blurbParagraph ">
            Welcome to my exploration of art in the digital age! This space is
            dedicated to pushing boundaries and utilizing the unique canvas of
            the internet. Dive into interactive experiences, ever-evolving
            creations, and art that thrives on connection and accessibility.
          </p>
        </article>
      </section>{" "}
      <Map />
      <section className="blogPost ">
        <article className="blogContent">
          <summary>
            <h3 className="thirdHeading"> All my reasoning for this net art</h3>
          </summary>
          <h2 className="secondHeading">Why this? Plastics? Litter? </h2>
          <p className="blurbParagraph ">
            The ocean is littered with plastic and this affects marine life. The
            scary truth about plastic is that plastic generally takes between
            500-1000 years to degrade. This means that we need to make an active
            effort to prevent more plastic from entering the ocean and remove
            the already present plastic waste. Many people aren’t aware of how
            plastic enters the ocean and where it comes from as well as a lack
            of knowledge of commonly dumped plastic products. My data art seeks
            to inform users on which countries and continents contribute the
            most amount of plastic waste into the ocean and what are the most
            common waste products.
          </p>
          <h2 className="secondHeading">Why React-Leaflet?</h2>
          <p className="blurbParagraph ">
            As stated in the preparatory research for this data art I required a
            library that enabled me to fully utilise the data on the share of
            plastic waste that is contributed by each country and continent.
            Through research, I found that the most suitable library was
            React-Leaflet. React-Leaflet offered multiple ways to enable
            interaction and enhance the understanding of the dataset. The
            features that I used from React-Leaflet are Markers, Popups, Vector
            Layers, View Bounds and layer control. In the next few paragraphs, I
            will explain how and why I used each of these elements for my net
            art.
          </p>
          <h2 className="secondHeading">Markers</h2>
          <p className="blurbParagraph ">
            From my initial design, I required a library that could accurately
            plot data points on a map. This is so that a user can gain a better
            understanding of which country is contributing the most amount of
            plastic waste in the ocean. The next step was to find a way to
            change the marker to visually indicate the value of the data. The
            default Marker from React-Leaflet is in the figure below. Through
            stack overflow, I found that React-Leaflet has an element called
            Circle Maker. This was perfect for my net art. Circle Maker has an
            outline and a fill for the centre and through code these colours can
            be manipulated. In my planning for this artwork, I called it a heat
            map.20 because of plotting points but the addition of the Circle
            Maker makes this a more accurate way of describing my net art since
            I was able to dynamically change the colour of the markers by
            checking a locations share of plastics waste and altering the colour
            of the markers.
          </p>{" "}
          <h2 className="secondHeading">Filter Buttons</h2>
          <p className="blurbParagraph ">
            Since the dataset had been split up it meant that the data was
            divide into 2 main sections (continents and countries). To better
            understand the data the user needed a way to filter what markers
            they were viewing. This is where I decided to create 3 buttons, one
            showed both datasets the next button showed only the countries' data
            and the other button showed all the continent data. This enabled
            meaningful interaction between the net art and the user. Another
            reason for the addition of the filter buttons is that when I decided
            to add icons in replacement for the markers the user is still able
            to filter which dataset they were looking at without the help of the
            coloured markers to tell the difference.
          </p>{" "}
          <figure>
            <img
              className="blogImg"
              src={require(`../../Images/Design/marker.png`)}
              alt="Marker"
            />
            <figcaption className="blogImgCaption">Marker</figcaption>
          </figure>
          <h2 className="secondHeading">Layers</h2>
          <p className="blurbParagraph ">
            After I found a meaningful way of displaying the data, I needed to
            find a way to transform this from an advanced data visualization
            into a net art, while still maintaining the core value of this
            website which is to educate and inform. This is where I decided to
            utilize the layers element along with the marker element from
            React-Leaflet. I decided to do research on what are the most
            commonly disposed of plastic products that are found in the ocean
            and to get pngs of each of these products. I replaced the markers
            with these pngs, and the user is able to select which markers they
            prefer to look at . This is also related to the target audience of
            this website. In the design section of this website, it was
            specified that this website is made to be accessible to all age
            groups and users from different backgrounds. To elaborate on this
            and give an example we must look at the original markers used which
            are the circle markers, these are saturated with information, from
            the colours to the placements to the overall look. People who have
            experience with heatmaps are able to understand from first glance
            what the markers are trying to show. To allow for customizability
            for other audiences the png serves as an informative and fun way to
            explore the data.
          </p>
          <h2 className="secondHeading">Heatmap</h2>
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

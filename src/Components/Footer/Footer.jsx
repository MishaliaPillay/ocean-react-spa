import React from "react";
import "./Footer.css";

//Refrence from code pen for styleing: Wendy. (2019). Simple CSS Waves. CodePen. Retrieved from https://codepen.io/opylfgtn/pen/JjEZeLE
const Footer = () => {
  return (
    <footer className="footer">
      <section className="wavesContainer">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentleWave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentleWave" x="48" y="0" fill="#077fe8" />
            <use xlinkHref="#gentleWave" x="48" y="3" fill="#4da8f7" />
            <use xlinkHref="#gentleWave" x="48" y="5" fill="#4d83f765" />
            <use
              xlinkHref="#gentleWave"
              x="48"
              y="7"
              fill="rgb(209, 231, 240)"
            />
          </g>
        </svg>
      </section>

      <section className="content flex">
        <p>All data fetched from https://oceaninfo.com/</p>
      </section>
    </footer>
  );
};

export default Footer;

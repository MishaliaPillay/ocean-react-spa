// src/images/imageLoader.js

function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item).default;
  });
  return images;
}

const images = importAll(
  require.context("./turtles", false, /\.(jpg|jpeg|png)$/)
);

export default images;

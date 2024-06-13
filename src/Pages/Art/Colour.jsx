// Function to get the marker color based on the entity and its type enity being reigions
export const getMarkerColor = (entity, type) => {
  const share = entity["Share of global plastics emitted to ocean"];
  const maxOpacity = 1;

  // If the type is "continent", calculate opacity based on it share  and return  a green color
  if (type === "continent") {
    let opacityContinent = share / 20;
    opacityContinent = Math.min(opacityContinent, maxOpacity); // check opacity does not exceed max
    return `rgba(0, 255, 0, ${opacityContinent})`; // calculated opacity for markers
  } else {
    //if not continnet run below function
    let opacity = share / 0.1;
    opacity = Math.min(opacity, maxOpacity); // check opacity does not exceed max
    return `rgba(255, 0, 0, ${opacity})`; // calculated opacity for markers
  }
};

// the style for each continent based on data form border . json
//this gives am outline and fill
export const getContinentStyle = (feature) => {
  // Switch statement to determine the style based on the continent name
  switch (feature.properties.CONTINENT) {
    case "Africa":
      return {
        color: "green",
        fillColor: "lightgreen",
        fillOpacity: 0.5,
        weight: 1,
      };
    case "Asia":
      return {
        color: "blue",
        fillColor: "lightblue",
        fillOpacity: 0.5,
        weight: 1,
      };
    case "Europe":
      return {
        color: "purple",
        fillColor: "lavender",
        fillOpacity: 0.5,
        weight: 1,
      };
    case "North America":
      return {
        color: "red",
        fillColor: "lightcoral",
        fillOpacity: 0.5,
        weight: 1,
      };
    case "South America":
      return {
        color: "orange",
        fillColor: "moccasin",
        fillOpacity: 0.5,
        weight: 1,
      };
    case "Australia":
      return {
        color: "yellow",
        fillColor: "lightyellow",
        fillOpacity: 0.5,
        weight: 1,
      };
    case "Antarctica":
      return {
        color: "grey",
        fillColor: "lightgrey",
        fillOpacity: 0.5,
        weight: 1,
      };
    default:
      return {
        color: "black",
        fillColor: "white",
        fillOpacity: 0.5,
        weight: 1,
      };
  }
};

// This create a popup which check the name of the continet the mouse is on
export const onEachContinent = (feature, layer) => {
  const continentName = feature.properties.CONTINENT;
  if (continentName) {
    layer.bindTooltip(continentName, { permanent: false, direction: "auto" });
  }
};

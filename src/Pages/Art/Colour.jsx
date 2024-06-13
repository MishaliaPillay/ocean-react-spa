export const getMarkerColor = (entity, type) => {
  const share = entity["Share of global plastics emitted to ocean"];
  const maxOpacity = 1;

  if (type === "continent") {
    let opacityContinent = share / 20; // Opacity between 0 and 1
    opacityContinent = Math.min(opacityContinent, maxOpacity);
    return `rgba(0, 255, 0, ${opacityContinent})`; // Green color with varying opacity
  } else {
    let opacity = share / 0.1; // Opacity between 0 and 1
    opacity = Math.min(opacity, maxOpacity);
    return `rgba(255, 0, 0, ${opacity})`; // Red color with varying opacity
  }
};

export const getContinentStyle = (feature) => {
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

export const onEachContinent = (feature, layer) => {
  const continentName = feature.properties.CONTINENT;
  if (continentName) {
    layer.bindTooltip(continentName, { permanent: false, direction: "auto" });
  }
};

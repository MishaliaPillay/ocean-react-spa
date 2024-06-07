import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  GeoJSON,
  Tooltip,
} from "react-leaflet";
import data from "../../Data/DataArt.json";
import continentsGeoJSON from "../../Data/Borders.json"; // Import the GeoJSON data

const Map = () => {
  const [filter, setFilter] = useState(""); // State for filter

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const getMarkerColor = (entity) => {
   
    const continents = [
      "Africa",
      "Asia",
      "Europe",
      "North America",
      "South America",
      "Australia",
      "Antarctica",
    ];

    if (continents.includes(entity.Entity)) {
      // Continent marker
      const share = entity["Share of global plastics emitted to ocean"];
      // Define the maximum opacity value
      const maxOpacity = 1; // Adjust this value as needed

      // Adjust opacity based on the share percentage
      let opacityContient = share / 20; // Opacity between 0 and 1

      // Cap opacityContient at the maximum value
      opacityContient = Math.min(opacityContient, maxOpacity);

      return `rgba(0, 255, 0,  ${opacityContient})`; // Green color with fixed opacity
    } else {
      // Other marker
      const share = entity["Share of global plastics emitted to ocean"];
      // Define the maximum opacity value
      const maxOpacity = 1; // Adjust this value as needed

      // Adjust opacity based on the share percentage
      let opacity = share / 0.1; // Opacity between 0 and 1

      // Cap opacity at the maximum value
      opacity = Math.min(opacity, maxOpacity);

      return `rgba(255, 0, 0, ${opacity})`; // Red color with varying opacity
    }
  };

  const filteredData = () => {
    if (filter === "countries") {
      // Filter data for countries excluding the 7 continents
      return data.filter(
        (entity) =>
          ![
            "Africa",
            "Asia",
            "Europe",
            "North America",
            "South America",
            "Australia",
            "Antarctica",
          ].includes(entity.Entity)
      );
    } else if (filter === "continents") {
      // Filter data for only the 7 continents
      return data.filter((entity) =>
        [
          "Africa",
          "Asia",
          "Europe",
          "North America",
          "South America",
          "Australia",
          "Antarctica",
        ].includes(entity.Entity)
      );
    } else {
      // Show all data
      return data;
    }
  };

  const getContinentStyle = (feature) => {
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

  const onEachContinent = (feature, layer) => {
    const continentName = feature.properties.CONTINENT;
    if (continentName) {
      layer.bindTooltip(continentName, { permanent: false, direction: "auto" });
    }
  };

  return (
    <>
      <section>
        <button
          className="facts"
          onClick={() => handleFilterChange("countries")}
        >
          Countries
        </button>
        <button
          className="facts"
          onClick={() => handleFilterChange("continents")}
        >
          Continents
        </button>
        <button className="facts" onClick={() => handleFilterChange("")}>
          All
        </button>
      </section>
      <MapContainer
        className="Ctn"
        center={[0, 0]}
        zoom={2}
        scrollWheelZoom={false}
        maxBounds={[
          [-90, -180], // Southwest
          [90, 180], // Northeast
        ]}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
          data={continentsGeoJSON}
          style={getContinentStyle}
          onEachFeature={onEachContinent}
        />
        {filteredData().map((entity, index) => (
          <CircleMarker
            key={index}
            center={[entity.Latitude, entity.Longitude]}
            radius={6}
            fillColor={getMarkerColor(entity)}
            fillOpacity={0.7}
            weight={1}
          >
            <Popup>
              {entity.Entity}
              <br />
              Share of Global Plastics Emitted to Ocean:{" "}
              {entity["Share of global plastics emitted to ocean"]}%
            </Popup>
            <Tooltip>{entity.Entity}</Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>
    </>
  );
};

export default Map;

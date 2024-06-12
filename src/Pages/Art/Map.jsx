import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  GeoJSON,
  Tooltip,
} from "react-leaflet";
import countriesData from "../../Data/DataArt.json";
import continentsData from "../../Data/Contients.json";
import continentsGeoJSON from "../../Data/Borders.json"; // Import the GeoJSON data

const Map = () => {
  const [filter, setFilter] = useState(""); // State for filter

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const getMarkerColor = (entity, type) => {
    const share = entity["Share of global plastics emitted to ocean"];
    const maxOpacity = 1;

    if (type === "continent") {
      // Continent marker
      let opacityContinent = share / 20; // Opacity between 0 and 1
      opacityContinent = Math.min(opacityContinent, maxOpacity);

      return `rgba(0, 255, 0, ${opacityContinent})`; // Green color with fixed opacity
    } else {
      // Country marker
      let opacity = share / 0.1; // Opacity between 0 and 1
      opacity = Math.min(opacity, maxOpacity);

      return `rgba(255, 0, 0, ${opacity})`; // Red color with varying opacity
    }
  };

  const filteredData = () => {
    if (filter === "countries") {
      // Show only country data
      return { countries: countriesData, continents: [] };
    } else if (filter === "continents") {
      // Show only continent data
      return { countries: [], continents: continentsData };
    } else {
      // Show all data
      return { countries: countriesData, continents: continentsData };
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

  const { countries, continents } = filteredData();

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
        {countries.map((entity, index) => (
          <CircleMarker
            key={index}
            center={[entity.Latitude, entity.Longitude]}
            radius={6}
            fillColor={getMarkerColor(entity, "country")}
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
        {continents.map((entity, index) => (
          <CircleMarker
            key={index}
            center={[entity.Latitude, entity.Longitude]}
            radius={6}
            fillColor={getMarkerColor(entity, "continent")}
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
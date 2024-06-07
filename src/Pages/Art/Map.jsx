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

  const getMarkerColor = (share) => {
    if (share >= 20) {
      return "red"; // Red for high percentage
    } else if (share >= 5) {
      return "orange"; // Orange for medium percentage
    } else {
      return "blue"; // Blue for low percentage
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
    switch (
      feature.properties.CONTINENT // Note: Use CONTINENT here
    ) {
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
            fillColor={getMarkerColor(
              entity["Share of global plastics emitted to ocean"]
            )}
            color={getMarkerColor(
              entity["Share of global plastics emitted to ocean"]
            )}
            fillOpacity={0.5}
            weight={1}
          >
            <Popup>
              {entity.Entity}
              <br />
              Share of Global Plastics Emitted to Ocean:{" "}
              {entity["Share of global plastics emitted to ocean"]}%
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </>
  );
};

export default Map;

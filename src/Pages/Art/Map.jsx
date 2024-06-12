import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Marker,
  Popup,
  GeoJSON,
  Tooltip,
  LayersControl,
  LayerGroup,
} from "react-leaflet";
import { Icon } from "leaflet"; // Import Icon from leaflet

import countriesData from "../../Data/DataArt.json";
import continentsData from "../../Data/Contients.json";
import continentsGeoJSON from "../../Data/Borders.json"; // Import the GeoJSON data
import trashIconUrl from "../../Images/Conservation/trash.png"; // Import your trash icon

import bottleIconUrl from "../../Images/Conservation/bottle.png";
import capsIconUrl from "../../Images/Conservation/bottle cap.png";
import budsIconUrl from "../../Images/Conservation/cigarette.png";
import candyIconUrl from "../../Images/Conservation/wrapper.jpeg";
import strawIconUrl from "../../Images/Conservation/straw.png";

const trashIcon = new Icon({
  iconUrl: trashIconUrl,
  iconSize: [20, 20],
});

const bottleIcon = new Icon({
  iconUrl: bottleIconUrl,
  iconSize: [20, 20],
});

const capsIcon = new Icon({
  iconUrl: capsIconUrl,
  iconSize: [20, 20],
});

const budsIcon = new Icon({
  iconUrl: budsIconUrl,
  iconSize: [20, 20],
});

const candyIcon = new Icon({
  iconUrl: candyIconUrl,
  iconSize: [20, 20],
});

const strawIcon = new Icon({
  iconUrl: strawIconUrl,
  iconSize: [20, 20],
});

const Map = () => {
  const [filter, setFilter] = useState(""); // State for filter

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const getMarkerColor = (entity, type) => {
    const share = entity["Share of global plastics emitted to ocean"];
    const maxOpacity = 1;

    if (type === "continent") {
      let opacityContinent = share / 20; // Opacity between 0 and 1
      opacityContinent = Math.min(opacityContinent, maxOpacity);
      return `rgba(0, 255, 0, ${opacityContinent})`; // Green color with fixed opacity
    } else {
      let opacity = share / 0.1; // Opacity between 0 and 1
      opacity = Math.min(opacity, maxOpacity);
      return `rgba(255, 0, 0, ${opacity})`; // Red color with varying opacity
    }
  };

  const filteredData = (filter) => {
    if (filter === "countries") {
      return { countries: countriesData, continents: [] };
    } else if (filter === "continents") {
      return { countries: [], continents: continentsData };
    } else {
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

  const { countries, continents } = filteredData(filter);

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
        <LayersControl position="topright">
          <LayersControl.Overlay name="Heatmap Markers" checked>
            <LayerGroup>
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
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Trash Icon Markers">
            <LayerGroup>
              {countries.map((entity, index) => (
                <Marker
                  key={index}
                  position={[entity.Latitude, entity.Longitude]}
                  icon={trashIcon}
                >
                  <Popup>
                    {entity.Entity}
                    <br />
                    Share of Global Plastics Emitted to Ocean:{" "}
                    {entity["Share of global plastics emitted to ocean"]}%
                  </Popup>
                  <Tooltip>{entity.Entity}</Tooltip>
                </Marker>
              ))}
              {continents.map((entity, index) => (
                <Marker
                  key={index}
                  position={[entity.Latitude, entity.Longitude]}
                  icon={trashIcon}
                >
                  <Popup>
                    {entity.Entity}
                    <br />
                    Share of Global Plastics Emitted to Ocean:{" "}
                    {entity["Share of global plastics emitted to ocean"]}%
                  </Popup>
                  <Tooltip>{entity.Entity}</Tooltip>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Bottle Markers">
            <LayerGroup>
              {countries.map((entity, index) => (
                <Marker
                  key={index}
                  position={[entity.Latitude, entity.Longitude]}
                  icon={bottleIcon}
                >
                  <Popup>
                    {entity.Entity}
                    <br />
                    Share of Global Plastics Emitted to Ocean:{" "}
                    {entity["Share of global plastics emitted to ocean"]}%
                  </Popup>
                  <Tooltip>{entity.Entity}</Tooltip>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Caps Markers">
            <LayerGroup>
              {countries.map((entity, index) => (
                <Marker
                  key={index}
                  position={[entity.Latitude, entity.Longitude]}
                  icon={capsIcon}
                >
                  <Popup>
                    {entity.Entity}
                    <br />
                    Share of Global Plastics Emitted to Ocean:{" "}
                    {entity["Share of global plastics emitted to ocean"]}%
                  </Popup>
                  <Tooltip>{entity.Entity}</Tooltip>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Buds Markers">
            <LayerGroup>
              {countries.map((entity, index) => (
                <Marker
                  key={index}
                  position={[entity.Latitude, entity.Longitude]}
                  icon={budsIcon}
                >
                  <Popup>
                    {entity.Entity}
                    <br />
                    Share of Global Plastics Emitted to Ocean:{" "}
                    {entity["Share of global plastics emitted to ocean"]}%
                  </Popup>
                  <Tooltip>{entity.Entity}</Tooltip>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Candy Markers">
            <LayerGroup>
              {countries.map((entity, index) => (
                <Marker
                  key={index}
                  position={[entity.Latitude, entity.Longitude]}
                  icon={candyIcon}
                >
                  <Popup>
                    {entity.Entity}
                    <br />
                    Share of Global Plastics Emitted to Ocean:{" "}
                    {entity["Share of global plastics emitted to ocean"]}%
                  </Popup>
                  <Tooltip>{entity.Entity}</Tooltip>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Straw Markers">
            <LayerGroup>
              {countries.map((entity, index) => (
                <Marker
                  key={index}
                  position={[entity.Latitude, entity.Longitude]}
                  icon={strawIcon}
                >
                  <Popup>
                    {entity.Entity}
                    <br />
                    Share of Global Plastics Emitted to Ocean:{" "}
                    {entity["Share of global plastics emitted to ocean"]}%
                  </Popup>
                  <Tooltip>{entity.Entity}</Tooltip>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
        <GeoJSON
          data={continentsGeoJSON}
          style={getContinentStyle}
          onEachFeature={onEachContinent}
        />
      </MapContainer>
    </>
  );
};

export default Map;

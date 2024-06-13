import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON, LayersControl } from "react-leaflet";
import { getContinentStyle, onEachContinent } from "./Colour";
import Filter from "./Filter";
import Markers from "./Markers";
import {
  trashIcon,
  bottleIcon,
  capsIcon,
  budsIcon,
  candyIcon,
  strawIcon,
} from "./Icons";
import countriesData from "../../Data/DataArt.json";
import continentsData from "../../Data/Contients.json";
import continentsGeoJSON from "../../Data/Borders.json";

const Map = () => {
  const [filter, setFilter] = useState(""); // State that mananages the filters

  // Function checks whn the filter is changed
  const handleFilterChange = (value) => {
    setFilter(value);
  };

  // when a dliter is chosen is alters the data on the map to show what the usre slected
  const filteredData = (filter) => {
    if (filter === "countries") {
      return { countries: countriesData, continents: [] }; //  country data
    } else if (filter === "continents") {
      return { countries: [], continents: continentsData }; // continent data
    } else {
      return { countries: countriesData, continents: continentsData }; //  both country and continent data
    }
  };

  const { countries, continents } = filteredData(filter); // Checks current filter

  return (
    <section className="mapBox">
      <Filter handleFilterChange={handleFilterChange} />
      <MapContainer
        className="Ctn"
        center={[0, 0]}
        zoom={2}
        scrollWheelZoom={false}
        maxBounds={[
          [-90, -180],
          [90, 180],
        ]}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LayersControl position="topright">
          <LayersControl.Overlay name="Heatmap Markers" checked>
            <>
              <Markers entities={countries} type="country" />

              <Markers entities={continents} type="continent" />
            </>
          </LayersControl.Overlay>

          <LayersControl.Overlay name="Trash Icon Markers">
            <Markers entities={countries.concat(continents)} icon={trashIcon} />
          </LayersControl.Overlay>

          <LayersControl.Overlay name="Bottle Markers">
            <Markers entities={countries} icon={bottleIcon} />
          </LayersControl.Overlay>

          <LayersControl.Overlay name="Caps Markers">
            <Markers entities={countries} icon={capsIcon} />
          </LayersControl.Overlay>

          <LayersControl.Overlay name="Buds Markers">
            <Markers entities={countries} icon={budsIcon} />
          </LayersControl.Overlay>

          <LayersControl.Overlay name="Candy Markers">
            <Markers entities={countries} icon={candyIcon} />
          </LayersControl.Overlay>

          <LayersControl.Overlay name="Straw Markers">
            <Markers entities={countries} icon={strawIcon} />
          </LayersControl.Overlay>
        </LayersControl>

        <GeoJSON
          data={continentsGeoJSON}
          style={getContinentStyle}
          onEachFeature={onEachContinent}
        />
      </MapContainer>
    </section>
  );
};

export default Map;

import React from "react";
import {
  CircleMarker,
  Marker,
  Popup,
  Tooltip,
  LayerGroup,
} from "react-leaflet";
import { getMarkerColor } from "./Colour";

//This creates the  marker icons on the map
const Markers = ({ entities, type, icon }) => {
  return (
    <LayerGroup>
      {entities.map((entity, index) =>
        icon ? (
          // If icon there are icons ,it will polace them on the map at th eeact loctaion
          <Marker
            key={index}
            position={[entity.Latitude, entity.Longitude]}
            icon={icon}
          >
            <Popup>
              {entity.Entity}
              <br />
              Share of Global Plastics Emitted to Ocean:{" "}
              {entity["Share of global plastics emitted to ocean"]}%
            </Popup>
            <Tooltip>{entity.Entity}</Tooltip>
          </Marker>
        ) : (
          // If ther aren't iconscircle marker are shown on the map
          <CircleMarker
            key={index}
            center={[entity.Latitude, entity.Longitude]}
            radius={6}
            fillColor={getMarkerColor(entity, type)}
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
        )
      )}
    </LayerGroup>
  );
};

export default Markers;

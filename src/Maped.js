
import ReactDOM from 'react-dom/client';
import * as L from "leaflet";
import { MapContainer,Marker,Popup, TileLayer, useMap } from 'react-leaflet';
import React, { useState } from 'react';
import mapLink from './mapDataLinks.js';

function Livemap() {
  const [center,setCenter]=useState({lat:31.5204,lng:74.3587});
  const ZOOM_LEVEL=19;
  const size=[30,50];
  
  const LeafIcon = L.Icon.extend({
    options: {}
  });
  
  return (
  <MapContainer zoomControl={false} center={center} zoom={ZOOM_LEVEL} scrollWheelZoom={true} style={{width:'100%',height:'100%'}}>
    <TileLayer
      attribution={mapLink.maptiler.attribution} url={mapLink.maptiler.url}
    />
  
  </MapContainer>
    
  );
}

export default Livemap;

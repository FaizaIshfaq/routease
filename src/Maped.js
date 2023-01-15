
import ReactDOM from 'react-dom/client';
import * as L from "leaflet";
import { MapContainer,Marker,Popup, TileLayer, useMap } from 'react-leaflet';
import React, { useState } from 'react';
import mapLink from './mapDataLinks.js';

function Livemap() {
  const [sadar,setsadar]=useState((31.5496,74.3807));
  const [mughalpura,setMughalpura]=useState((31.5690,74.3586));
  const [dharampura,setdharampura]=useState((31.5525,74.3653));
  const [center,setCenter]=useState({lat:31.5204,lng:74.3587});
  const ZOOM_LEVEL=15;
  const size=[30,50];
  console.log("hello");
  if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(getPosition)
  }
  function getPosition(position){
    console.log(position)
    var lat=position.coords.latitude
    var long=position.coords.longitude
    var accuracy=position.coords.accuracy
    console.log(lat,long,accuracy)
  }
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

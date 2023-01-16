
import ReactDOM from 'react-dom/client';
import * as L from "leaflet";
import { MapContainer,Marker,Popup, TileLayer, useMap } from 'react-leaflet';
import React, { useState } from 'react';
import mapLink from './mapDataLinks.js';
import visitedstop from './images/visitedstop.svg';
import unvisitedstop from './images/unvisitedstop.svg';
import car from './images/car.svg';
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import Routing from './Routing.js';

function Livemap() {
  const [sadar,setsadar]=useState([31.5496,74.3807]);
  const [mughalpura,setMughalpura]=useState([31.5690,74.3586]);
  const [dharampura,setdharampura]=useState([31.5525,74.3653]);
  const [lalpul,setlalpul]=useState([31.5633,74.3904]);
  const [center,setCenter]=useState({lat:31.5520,lng:74.3804});
  const ZOOM_LEVEL=15;
  const size=[20,30];
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
  const m1=new LeafIcon({
    iconUrl:visitedstop,
    iconSize: size,
  });
  const m2=new LeafIcon({
    iconUrl:unvisitedstop,
    iconSize:size,
  });
  const caricon=new LeafIcon({
    iconUrl:car,
    iconSize:[35,35],
  });
  
  return (
  <MapContainer zoomControl={false} center={center} zoom={ZOOM_LEVEL} scrollWheelZoom={true} style={{width:'100%',height:'100%'}}>
    <TileLayer
      attribution={mapLink.maptiler.attribution} url={mapLink.maptiler.url}
    />
    <Marker position={[31.5643,74.3914]} icon={m1}>

    </Marker>
    <Marker position={[31.5660,74.39999]} icon={m1}>

  </Marker>
    <Marker position={[31.5520,74.3804]} icon={caricon}>
    </Marker>
    <Marker position={[31.5500,74.3807]} icon={m2}>
    </Marker>
    <Routing />
  </MapContainer>
    
  );
}

export default Livemap;

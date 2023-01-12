
import ReactDOM from 'react-dom/client';
import * as L from "leaflet";
import markerR1 from './images/iconR1.svg';
import markerR2 from './images/iconR2.svg';
import markerR3 from './images/iconR3.svg';
import markerR4 from './images/iconR4.svg';
import markerR5 from './images/iconR5.svg';
import markerR6 from './images/iconR6.svg';
import { MapContainer,Marker,Popup, TileLayer, useMap } from 'react-leaflet';
import React, { useState } from 'react';
import mapLink from './mapDataLinks.js';

function Livemap() {
  const [center,setCenter]=useState({lat:31.5204,lng:74.3587});
  const ZOOM_LEVEL=11;
  const size=[30,50];
  const LeafIcon = L.Icon.extend({
    options: {}
  });
  const markerIcon1=new LeafIcon({
    iconUrl:markerR1,
    iconSize: size,
  });
  const markerIcon2=new LeafIcon({
    iconUrl:markerR2,
    iconSize: size,
  });
  const markerIcon3=new LeafIcon({
    iconUrl:markerR3,
    iconSize:size,
  });
  const markerIcon4=new LeafIcon({
    iconUrl:markerR4,
    iconSize: size,
  });
  const markerIcon5=new LeafIcon({
    iconUrl:markerR5,
    iconSize: size,
  });
  const markerIcon6=new LeafIcon({
    iconUrl:markerR6,
    iconSize: size,
  });

    // if(!navigator.geolocation){
  //   console.log("Your browser doesn't support geolocation feature!")
  // }
  // else{
  //   navigator.geolocation.getCurrentPosition(getPosition)
  // }
  // //getting live location
  // function getPosition(position){
  //   // console.log(position)
  //   var lat=position.coords.latitude
  //   var long=position.coords.longitude
  //   var accuracy=position.coords.accuracy
    
   
  //   var markerpos= new L.latLng(lat,long)
  //   markerIcon1.setLatLng(markerpos)
  //   console.log(lat,long,accuracy)
  // }
  
  return (
        <MapContainer zoomControl={false} center={center} zoom={ZOOM_LEVEL} scrollWheelZoom={true} style={{width:'100%',height:'100%'}}>
    <TileLayer
      attribution={mapLink.maptiler.attribution} url={mapLink.maptiler.url}
    />
    <Marker position={[31.673287,74.32236]} icon={markerIcon1}>
    </Marker>
    <Marker position={[31.485979,74.326639]} icon={markerIcon2}>
    </Marker>
    <Marker position={[31.563508,74.337276]} icon={markerIcon3}>
    </Marker>
    <Marker position={[31.563138,74.40568]} icon={markerIcon4}>
    </Marker>
    <Marker position={[31.63906,74.520661]} icon={markerIcon5}>
    </Marker>
    <Marker position={[31.427198,74.299093]} icon={markerIcon6}>
    </Marker>
  
  </MapContainer>
    
  );
}

export default Livemap;

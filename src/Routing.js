import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = (props) => {
  const instance = L.Routing.control({
    show:false,
    addWaypoints: false,
    draggableWaypoints: false,
    fitSelectedRoutes: false,
    collapsible: false,
    lineOptions: {
      styles: [{color: '#252C3D', opacity: 1, weight: 5}]
   },
    waypoints: [
      L.latLng(31.5660,74.39999),
      L.latLng(31.5500,74.3807),
    ],
    createMarker: function() { return null; }
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
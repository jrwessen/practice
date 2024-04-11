import React, { MutableRefObject, useEffect, useReducer, useRef } from "react";
import { View, Map } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { useGeographic } from "ol/proj";
import "ol/ol.css";

useGeographic();

const map = new Map({
  view: new View({ center: [10, 63], zoom: 8 }),
  layers: [new TileLayer({ source: new OSM() })],
});
export function TransitMapApplication() {
  const mapRef = useRef() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    map.setTarget(mapRef.current);
  }, []);

  return <div ref={mapRef}></div>;
}

import Image from "next/image";
import React, { useState } from "react";

import Map, { FullscreenControl, NavigationControl } from "react-map-gl";

import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "mapbox-gl/dist/mapbox-gl.css";

import burgerMenu from "../../../../public/assets/icons/menu.svg";
import { GeocoderControl } from "./GeoCoder";
import { MarkerList } from "./MarkerList";

export const MapChart = () => {
  const [viewState, setViewState] = useState({
    latitude: 55.0415,
    longitude: 82.9346,
    zoom: 12
  });

  return (
    <div className="relative">
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: 380, height: 1000 }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={String(process.env.MAPBOX_TOKEN)}
      >
        <MarkerList />
        <GeocoderControl
          mapboxAccessToken={String(process.env.MAPBOX_TOKEN)}
          position="top-left"
        />
        {/* <NavigationControl /> */}
        {/* <FullscreenControl /> */}
      </Map>
      <div className="absolute">
        <button>
          <Image
            src={burgerMenu.src}
            width={32}
            height={32}
            alt={"burgerMenu"}
          ></Image>
        </button>
      </div>
    </div>
  );
};

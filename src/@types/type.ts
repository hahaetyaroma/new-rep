import { GeocoderOptions } from "@mapbox/mapbox-gl-geocoder";
import { ControlPosition, MarkerProps } from "react-map-gl";

export interface IDataMarkers {
  id: number;
  latitude: number;
  longitude: number;
  status: boolean;
}

export type GeocoderControlProps = Omit<
  GeocoderOptions,
  "accessToken" | "mapboxgl" | "marker"
> & {
  mapboxAccessToken: string;
  marker?: boolean | Omit<MarkerProps, "longitude" | "latitude">;

  position: ControlPosition;

  onLoading?: (e: object) => void;
  onResults?: (e: object) => void;
  onResult?: (e: object) => void;
  onError?: (e: object) => void;
};

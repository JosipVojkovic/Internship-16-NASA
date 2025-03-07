import { LeafletMouseEvent } from "leaflet";

export type EarthMapProps = {
  position: [number, number] | null;
  handleMapClick: (e: LeafletMouseEvent) => void;
};

export type EarthLocationImage = {
  date: string;
  id: string;
  resource: {
    dataset: string;
    planet: string;
  };
  service_version: string;
  url: string;
};

export type FavLocation = {
  lat: number;
  lng: number;
};

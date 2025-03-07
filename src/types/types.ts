import { LeafletMouseEvent } from "leaflet";

export type Routes = {
  [key: string]: string;
};

export type FetchResult<T> = {
  data: T | [];
  loading: boolean;
  error: string | null;
};

export type APODData = {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
};

export type EarthMapProps = {
  position: [number, number] | null;
  coordinates: string;
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

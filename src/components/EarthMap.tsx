import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { LeafletMouseEvent } from "leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { EarthMapProps } from "../types";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const MapClickHandler = ({
  onMapClick,
}: {
  onMapClick: (e: LeafletMouseEvent) => void;
}) => {
  useMapEvents({
    click: onMapClick,
  });
  return null;
};

export function EarthMap({
  position,
  coordinates,
  handleMapClick,
}: EarthMapProps) {
  console.log(position);

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
      wheelDebounceTime={100}
      wheelPxPerZoomLevel={60}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <MapClickHandler onMapClick={handleMapClick} />
      {position && (
        <Marker position={position}>
          <Popup>{coordinates}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

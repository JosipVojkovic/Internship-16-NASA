import { LeafletMouseEvent } from "leaflet";
import { EarthMap, Spinner } from "../components";
import "./EarthImagery.css";
import { useEffect, useState } from "react";
import { getLocationEarthImage } from "../services";
import { fetchFromAPI } from "../services/api";
import { EarthLocationImage } from "../types";

export function EarthImageryPage() {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [coordinates, setCoordinates] = useState<string>("");
  const [image, setImage] = useState<EarthLocationImage | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const handleMapClick = (e: LeafletMouseEvent) => {
    const { lat, lng } = e.latlng;
    setPosition([lat, lng]);
    setCoordinates(`Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}`);
  };

  useEffect(() => {
    if (!position) {
      return;
    }

    const fetchData = async () => {
      setError(null);
      setImage(null);
      setLoading(true);
      try {
        const { endpoint, params } = getLocationEarthImage(
          position[0],
          position[1]
        );
        const locatedImage = await fetchFromAPI(endpoint, params);
        setImage(locatedImage);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [position]);

  return (
    <section className="earth-imagery-section">
      <h1>Earth Imagery</h1>

      <div className="location-image-wrapper">
        <EarthMap
          position={position}
          coordinates={coordinates}
          handleMapClick={handleMapClick}
        />
        <div className="image-container">
          {!position && <p>Select location!</p>}
          {image && <img src={image.url} alt="" />}
          {position && loading && <Spinner />}
          {error && (
            <p>
              There is no image for that location, please choose another
              location.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

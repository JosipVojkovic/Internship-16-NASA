import { LeafletMouseEvent } from "leaflet";
import { EarthMap, Spinner } from "../components";
import "./EarthImagery.css";
import { useEffect, useState } from "react";
import { getLocationEarthImage } from "../services";
import { fetchFromAPI } from "../services/api";
import { EarthLocationImage, FavLocation } from "../types";
import { useOutletContext } from "react-router-dom";

export function EarthImageryPage() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();

  const [position, setPosition] = useState<[number, number] | null>(null);
  const [image, setImage] = useState<EarthLocationImage | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [favLocations, setFavLocations] = useState<FavLocation[]>([]);

  const handleMapClick = (e: LeafletMouseEvent) => {
    const { lat, lng } = e.latlng;
    setPosition([lat, lng]);
  };

  const handleSaveLocation = () => {
    if (!position) {
      return;
    }

    setFavLocations((prev) => [
      ...prev,
      { lat: position[0], lng: position[1] },
    ]);

    localStorage.setItem(
      "locations",
      JSON.stringify([...favLocations, { lat: position[0], lng: position[1] }])
    );
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

  useEffect(() => {
    const storedLocations = localStorage.getItem("locations") || "[]";
    setFavLocations(JSON.parse(storedLocations));
  }, []);

  console.log(favLocations);

  return (
    <section className={`earth-imagery-section ${darkMode ? "dark-mode" : ""}`}>
      <h1>Earth Imagery</h1>

      <div className="location">
        <p className="lon-lat">
          <span>Latitude: {position ? position[0].toFixed(4) : "N/A"}</span>
          <span>Longitude: {position ? position[1].toFixed(4) : "N/A"}</span>
        </p>

        <button onClick={handleSaveLocation}>Save Location</button>

        <p className="favourite-location">
          You can see your favourite locations at the bottom of the page.
        </p>
      </div>

      <div className="location-image-wrapper">
        <EarthMap position={position} handleMapClick={handleMapClick} />
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
      <div className="favourite-locations-container">
        <h2>Favourite Locations</h2>
        {favLocations.length ? (
          <table className="favourite-locations-table">
            <thead>
              <tr>
                <th>Longitude</th>
                <th>Latitude</th>
              </tr>
            </thead>
            <tbody>
              {favLocations.map((fl, index) => (
                <tr key={index} className="location-row">
                  <td>{fl.lng.toFixed(4)}</td>
                  <td>{fl.lat.toFixed(4)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-locations-message">
            You don't have any favourite locations.
          </p>
        )}
      </div>
    </section>
  );
}

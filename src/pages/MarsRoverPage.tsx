import { useEffect, useState } from "react";
import "./MarsRoverPage.css";
import { Spinner } from "../components/Spinner";
import { fetchFromAPI } from "../services/api";
import { getRoverPhotos } from "../services";
import { formattedDate } from "../utils/dateHelpers";
import {
  MarsRoverFilter,
  MarsRoverPhoto,
  MarsRoverPhotos,
} from "../types/marsRoverTypes";
import { MarsRoverPhotoCard } from "../components/MarsRoverPhotoCard";
import { useNavigate, useOutletContext } from "react-router-dom";

export function MarsRoverPage() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();

  const [data, setData] = useState<MarsRoverPhoto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<MarsRoverFilter>({
    rover: "",
    date: "",
    camera: "",
  });

  const navigate = useNavigate();

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePhotoCardClick = (photoId: number) => {
    const selectedPhoto = data.find((d) => d.id === photoId);

    navigate(`/mars-rover/${photoId}`, {
      state: {
        photo: selectedPhoto,
      },
      replace: false,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      setLoading(true);
      try {
        if (filter.rover && filter.date) {
          const { endpoint, params } = getRoverPhotos(
            filter.rover,
            filter.date,
            filter.camera
          );

          console.log(endpoint, params);
          const filteredRoverPhotos: MarsRoverPhotos = await fetchFromAPI(
            endpoint,
            params
          );
          setData(filteredRoverPhotos.photos);
        }
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
  }, [filter.rover, filter.date, filter.camera]);

  console.log(data);

  return (
    <section className={`mars-rover-section ${darkMode ? "dark-mode" : ""}`}>
      <h1>Mars Rover</h1>

      <div className="mars-rover-filters">
        <div>
          <label>
            Select rover:
            <select
              name="rover"
              value={filter.rover}
              onChange={(e) => handleFilterChange(e)}
            >
              <option value="" disabled>
                Select...
              </option>
              <option value="curiosity">Curiosity</option>
              <option value="opportunity">Opportunity</option>
              <option value="spirit">Spirit</option>
            </select>
          </label>

          <label>
            Enter date:
            <input
              name="date"
              type="date"
              value={filter.date}
              onChange={(e) => handleFilterChange(e)}
              max={formattedDate(new Date())}
            />
          </label>

          <label>
            Select camera:
            <select
              name="camera"
              disabled={!filter.rover}
              value={filter.camera}
              onChange={(e) => handleFilterChange(e)}
            >
              <option value="">All</option>
              <option value="fhaz">FHAZ</option>
              <option value="rhaz">RHAZ</option>
              <option value="mast">MAST</option>
              <option value="chemcam">CHEMCAM</option>
              <option value="mahli">MAHLI</option>
              <option value="mardi">MARDI</option>
              <option value="navcam">NAVCAM</option>
              <option value="pancam">PANCAM</option>
              <option value="minites">MINITES</option>
            </select>
          </label>
        </div>
      </div>

      <div className="rover-photos-container">
        {!filter.rover || !filter.date ? (
          <p>You have to select rover and date!</p>
        ) : loading ? (
          <Spinner />
        ) : data?.length > 0 ? (
          data.map((d) => (
            <MarsRoverPhotoCard
              key={d.id}
              photo={d}
              onClick={handlePhotoCardClick}
            />
          ))
        ) : (
          <p>{error ? error : "There are no photos for selected filters!"}</p>
        )}
      </div>
    </section>
  );
}

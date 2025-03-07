import { useEffect, useState } from "react";
import "./MarsRoverPage.css";
import { APODData } from "../types/types";
import { Spinner } from "../components/Spinner";
import curiosityRover from "../assets/images/curiosityRover.jpg";
import opportunityRover from "../assets/images/opportunityRover.jpg";
import spiritRover from "../assets/images/spiritRover.jpg";
import securityCamera from "../assets/images/securityCamera.png";
import { fetchFromAPI } from "../services/api";
import { getRoverPhotos } from "../services";

export function MarsRoverPage() {
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<APODData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<{
    rover: string;
    date: string;
    camera: string;
  }>({
    rover: "",
    date: "",
    camera: "",
  });

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (filter.rover && filter.date) {
          const { endpoint, params } = getRoverPhotos(
            filter.rover,
            filter.date,
            filter.camera
          );
          const filteredRoverPhotos: APODData = await fetchFromAPI(
            endpoint,
            params
          );
          setData([filteredRoverPhotos]);
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
    <section className="mars-rover-section">
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

        <button>Filter</button>
      </div>
    </section>
  );
}

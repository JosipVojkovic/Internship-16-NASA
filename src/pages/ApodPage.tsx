import { useState, useEffect } from "react";
import { Spinner } from "../components/Spinner";
import { APODData } from "../types/types";
import {
  getAPODsForLast20DaysParams,
  getAPODsForSelectedDate,
} from "../services/apodService";
import "./ApodPage.css";
import { fetchFromAPI } from "../services/api";

export function ApodPage() {
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<APODData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [dateFilter, setDateFilter] = useState("");

  console.log(dateFilter);

  const handleScroll = () => {
    if (loading || dateFilter) return;

    const isBottomReached =
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100;

    if (isBottomReached) {
      setPage((prev) => prev + 1);
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setPage(1);
    }

    setDateFilter(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (dateFilter) {
          setData([]);
          const { endpoint, params } = getAPODsForSelectedDate(dateFilter);
          const filteredApod: APODData = await fetchFromAPI(endpoint, params);
          setData([filteredApod]);
        } else {
          const { endpoint, params } = getAPODsForLast20DaysParams(page);
          const apods = await fetchFromAPI(endpoint, params);
          setData((prev) => (page === 1 ? apods : [...prev, ...apods]));
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
  }, [page, dateFilter]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <section className="apod-gallery-section">
      <h1>Astronomy Picture of the Day (APOD) Gallery</h1>
      {loading && !data.length ? (
        <Spinner />
      ) : (
        <div className="apod-filters">
          <label htmlFor="apod-date-filter">Filter by date:</label>
          <input
            type="date"
            id="apod-date-filter"
            onChange={(e) => handleDateChange(e)}
            value={dateFilter}
            max={new Date().toISOString().split("T")[0]}
          />
        </div>
      )}

      <div className="apod-gallery-container">
        {data.length === 0 && !loading && <p>No images available.</p>}
        {data?.map((d) => (
          <div key={d.title} className="apod-image">
            <div className="apod-slider">
              <h3>{d.title}</h3>
              <p>{d.date}</p>
            </div>
            <img src={d.url} alt={d.title} />
          </div>
        ))}
      </div>
      {loading && data.length > 0 && <Spinner />}
    </section>
  );
}

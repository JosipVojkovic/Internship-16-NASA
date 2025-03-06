import { useState, useEffect } from "react";
import { Spinner } from "../components/Spinner";
import { APODData } from "../types/types";
import { getAPODsForLast20DaysParams } from "../services/apodService";
import "./ApodPage.css";
import { fetchFromAPI } from "../services/api";

export function ApodPage() {
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<APODData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { endpoint, params } = getAPODsForLast20DaysParams(page);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result: APODData[] = await fetchFromAPI(endpoint, params);
        setData((prev) => [...prev, ...result]);
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
  }, [page]);

  console.log(page);

  const handleScroll = () => {
    if (loading) return;

    const isBottomReached =
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100;

    if (isBottomReached) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <section className="apod-gallery-section">
      <h1>APOD Page</h1>
      {loading && <Spinner />}
      <div className="apod-gallery-container">
        {data.length === 0 && !loading && <p>No images available.</p>}
        {data?.map((d) => (
          <div key={d.title} className="apod-image">
            <img src={d.url} alt={d.title} />
          </div>
        ))}
      </div>
      {loading && data.length > 0 && <Spinner />}
    </section>
  );
}

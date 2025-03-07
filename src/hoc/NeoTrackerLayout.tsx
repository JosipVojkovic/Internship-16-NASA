import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../services/api";
import { getNeos } from "../services";
import { NEOByDate } from "../types";
import "./NeoTrackerLayout.css";
import { Spinner } from "../components";

export function NeoTrackerLayout() {
  const [data, setData] = useState<NEOByDate>({});
  const [dates, setDates] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { endpoint } = getNeos();
        const response = await fetchFromAPI(endpoint);
        const neoData = response.near_earth_objects;
        const sortedDates = Object.keys(neoData).sort();

        setDates(sortedDates);
        setData(neoData);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const processChartData = () => {
    return dates.map((date) => ({
      date,
      count: data[date].length,
      hazardous: data[date].filter(
        (neo) => neo.is_potentially_hazardous_asteroid
      ).length,
    }));
  };

  const handlePrevious = () => setCurrentPage((prev) => Math.max(0, prev - 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(dates.length - 1, prev + 1));

  const currentDate = dates[currentPage];
  const currentNeos = data[currentDate] || [];
  const chartData = processChartData();

  return (
    <section className="neo-tracker-section">
      <nav className="neo-tracker-nav">
        <NavLink
          to="/neo-tracker"
          className={({ isActive }) => (isActive ? "active" : "")}
          end
        >
          Neo Objects
        </NavLink>
        <NavLink
          to="/neo-tracker/visualisation"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Statistics
        </NavLink>
      </nav>
      {error ? (
        <p>{error}</p>
      ) : loading ? (
        <Spinner />
      ) : (
        <Outlet
          context={{
            currentNeos,
            currentDate,
            dates,
            currentPage,
            handlePrevious,
            handleNext,
            chartData,
          }}
        />
      )}
    </section>
  );
}

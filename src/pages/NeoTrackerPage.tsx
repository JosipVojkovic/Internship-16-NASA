import { useEffect, useState } from "react";
import { fetchFromAPI } from "../services/api";
import { getNeos } from "../services";

export function NeoTrackerPage<T>() {
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { endpoint } = getNeos();
        const { near_earth_objects } = await fetchFromAPI(endpoint);
        setData(near_earth_objects);
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
  }, []);

  return (
    <section className="neo-tracker-section">
      <h1>Neo Tracker Page</h1>
      <div className="neos-container">
        {data &&
          Object.entries(data).map(([key, value]) => (
            <div key={key}>
              <h2>{key}</h2>
              {Array.isArray(value) &&
                value.map((item: any) => <div key={item.id}>{item.name}</div>)}
            </div>
          ))}
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { FetchResult } from "../types/types";
import { fetchFromAPI } from "../services/api";

const useFetch = <T>(endpoint: string, params: object = {}): FetchResult<T> => {
  const [data, setData] = useState<T | []>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result: T = await fetchFromAPI(endpoint, params);
        setData(result);
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
  }, [endpoint, JSON.stringify(params)]);

  return { data, loading, error };
};

export default useFetch;

import { Spinner } from "../components/Spinner";
import useFetch from "../hooks/useFetch";
import { APODData } from "../types/types";
import "./ApodPage.css";

export function ApodPage() {
  const { data, loading, error } = useFetch<APODData[]>("planetary/apod", {
    count: "20",
  });

  console.log(data, loading, error);

  return (
    <>
      <h1>APOD Page</h1>
      <Spinner />
    </>
  );
}

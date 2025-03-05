import { Spinner } from "../components/Spinner";
import useFetch from "../hooks/useFetch";
import { APODData } from "../types/types";
import "./ApodPage.css";

export function ApodPage() {
  const { data, loading, error } = useFetch<APODData[]>("planetary/apod", {
    count: "20",
  });

  return (
    <section className="apod-gallery-section">
      <h1>APOD Page</h1>
      <div className="apod-gallery-container">
        {data ? (
          data.map((d) => (
            <div className="apod-image">
              <img src={d.url} alt="" />
            </div>
          ))
        ) : (
          <p>There is no images!</p>
        )}
      </div>
      {loading ? <Spinner /> : ""}
    </section>
  );
}

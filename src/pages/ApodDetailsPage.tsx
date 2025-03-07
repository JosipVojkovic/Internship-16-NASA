import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./ApodDetailsPage.css";
import { APODData } from "../types";
import { useEffect } from "react";

export function ApodDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { apodTitle } = useParams<{ apodTitle?: string }>();
  const apod: APODData | undefined = location.state?.apod;

  useEffect(() => {
    const verifyData = () => {
      if (!apod || !apodTitle) {
        navigate("/404", { replace: true });
        return;
      }

      const decodedTitle = decodeURIComponent(apodTitle);
      if (decodedTitle !== apod.title) {
        navigate("/404", { replace: true });
      }
    };

    verifyData();
  }, [apod, apodTitle, navigate]);

  if (!apod) {
    return null;
  }

  console.log(apod);

  return (
    <section className="apod-details-section">
      <div className="apod-text-img-wrapper">
        <div className="apod-details-text">
          <h1>
            {apod.title}
            <span className="apod-date">{apod.date}</span>
          </h1>

          <div className="apod-explanation-container">
            <h2>Explanation</h2>
            <p>{apod.explanation}</p>
          </div>

          <button>Go Back</button>
        </div>
        <div className="apod-details-image">
          <img src={apod.url} alt={`Image of ${apodTitle}`} />
        </div>
      </div>
    </section>
  );
}

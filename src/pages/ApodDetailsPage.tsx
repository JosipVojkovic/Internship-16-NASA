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
    if (!apod || !apodTitle || decodeURIComponent(apodTitle) !== apod.title) {
      navigate("/404", { replace: true });
    }
  }, [apod, apodTitle, navigate]);

  if (!apod || !apodTitle || decodeURIComponent(apodTitle) !== apod.title) {
    return null;
  }

  return (
    <section className="apod-details-section">
      <h1>{apod.title}</h1>
    </section>
  );
}

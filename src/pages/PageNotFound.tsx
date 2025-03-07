import { Link, useNavigate } from "react-router-dom";
import "./PageNotFound.css";
import astronautOnMoon from "../assets/images/astronautOnMoon.png";

export function PageNotFound() {
  const navigate = useNavigate();

  return (
    <section className="page-not-found-section">
      <h1>
        404
        <img src={astronautOnMoon} alt="Astronaut on the moon" />
      </h1>

      <h2 className="error-title">Oops! Page Not Found </h2>

      <p className="error-description">
        The page you are looking for may have been removed, renamed, or
        temporarily unavailable.
      </p>

      <div className="navigation-options">
        <button onClick={() => navigate(-1)} className="go-back-btn">
          Go Back
        </button>

        <span className="divider">or</span>

        <Link to="/" className="home-link">
          Go to Home Page
        </Link>
      </div>
    </section>
  );
}

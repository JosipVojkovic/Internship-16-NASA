import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./ApodDetailsPage.css";
import { MarsRoverPhoto } from "../types";
import { useEffect } from "react";

export function MarsRoverPhotoPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { photoId } = useParams<{ photoId?: string }>();
  const photo: MarsRoverPhoto | undefined = location.state?.photo;

  const handleBack = () => {
    navigate("/mars-rover");
  };

  useEffect(() => {
    const verifyData = () => {
      if (!photo || !photoId) {
        navigate("/404", { replace: true });
        return;
      }

      if (photoId !== photo.id.toString()) {
        navigate("/404", { replace: true });
      }
    };

    verifyData();
  }, [photo, photoId, navigate]);

  if (!photo) {
    return null;
  }

  return (
    <section className="apod-details-section">
      <div className="apod-text-img-wrapper">
        <div className="apod-details-text">
          <h1>
            {photo.id}
            <span className="apod-date">{photo.earth_date}</span>
          </h1>

          <div className="apod-explanation-container">
            <h2>Explanation</h2>
            <p>{photo.sol}</p>
          </div>

          <button onClick={handleBack}>Go Back</button>
        </div>
        <div className="apod-details-image">
          <img src={photo.img_src} alt={`Image of ${photo.id}`} />
        </div>
      </div>
    </section>
  );
}

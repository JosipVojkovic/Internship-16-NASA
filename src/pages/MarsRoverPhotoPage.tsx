import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./MarsRoverPhotoPage.css";
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
    <section className="mars-rover-details-section">
      <div className="mars-rover-text-img-wrapper">
        <div className="mars-rover-details-text">
          <h1>
            ID: {photo.id}
            <span className="photo-earth-date">{photo.earth_date}</span>
          </h1>

          <div className="mars-rover-details">
            <p>
              <span>Rover:</span> {photo.rover.name}
            </p>
            <p>
              <span>Sol (Martian day):</span> {photo.sol}
            </p>
            <p>
              <span>Camera:</span> {photo.camera.name}
            </p>
          </div>

          <button onClick={handleBack}>Go Back</button>
        </div>
        <div className="mars-rover-details-image">
          <img src={photo.img_src} alt={`Image of ${photo.id}`} />
        </div>
      </div>
    </section>
  );
}

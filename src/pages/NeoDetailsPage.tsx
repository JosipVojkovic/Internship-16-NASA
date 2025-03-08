import { useLocation, useNavigate, useParams } from "react-router-dom";
import { NEO } from "../types";
import { useEffect, useState } from "react";
import "./NeoDetailsPage.css";

export function NeoDetailsPage() {
  const [distanceUnit, setDistanceUnit] = useState<string>("kilometars");
  const location = useLocation();
  const navigate = useNavigate();
  const { neoId } = useParams<{ neoId?: string }>();
  const neo: NEO | undefined = location.state?.neo;

  const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDistanceUnit(e.target.value);
  };

  const handleBack = () => {
    navigate("/neo-tracker");
  };

  useEffect(() => {
    const verifyData = () => {
      if (!neo || !neoId) {
        navigate("/404", { replace: true });
        return;
      }

      if (neoId !== neo.id) {
        navigate("/404", { replace: true });
      }
    };

    verifyData();
  }, [neo, neoId, navigate]);

  if (!neo) {
    return null;
  }

  const {
    estimated_diameter,
    close_approach_data: [closestApproach],
  } = neo;

  const maxDiameter =
    distanceUnit === "kilometers"
      ? `${estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)} km`
      : `${estimated_diameter.miles.estimated_diameter_max.toFixed(2)} mi`;

  const minDiameter =
    distanceUnit === "kilometers"
      ? `${estimated_diameter.kilometers.estimated_diameter_min.toFixed(2)} km`
      : `${estimated_diameter.miles.estimated_diameter_min.toFixed(2)} mi`;

  const missDistance =
    distanceUnit === "kilometers"
      ? `${parseFloat(
          closestApproach.miss_distance.kilometers
        ).toLocaleString()} km`
      : `${parseFloat(
          closestApproach.miss_distance.miles
        ).toLocaleString()} mi`;

  const relativeVelocity =
    distanceUnit === "kilometers"
      ? `${parseFloat(
          closestApproach.relative_velocity.kilometers_per_hour
        ).toLocaleString()} km/h`
      : `${parseFloat(
          closestApproach.relative_velocity.miles_per_hour
        ).toLocaleString()} mph`;

  return (
    <section className="neo-details-section">
      <h1>
        {neo.name}
        <p
          className={`hazard-status ${
            neo.is_potentially_hazardous_asteroid ? "danger" : "safe"
          }`}
        >
          {neo.is_potentially_hazardous_asteroid ? "⚠ Hazardous" : "Safe"}
        </p>
      </h1>
      <div className="neo-details-text">
        <p>
          <span>Choose Unit: </span>
          <select onChange={handleUnitChange} value={distanceUnit}>
            <option value="kilometers">Kilometers</option>
            <option value="miles">Miles</option>
          </select>
        </p>

        <p>
          <span>Absolute Magnitude: </span>
          {neo.absolute_magnitude_h} mag
        </p>
        <p>
          <span>Max. Estimated Diameter: </span>
          {maxDiameter}
        </p>
        <p>
          <span>Min. Estimated Diameter: </span>
          {minDiameter}
        </p>
        <p>
          <span>Estimated Date Approach: </span>
          {closestApproach.close_approach_date_full}
        </p>
        <p>
          <span>Miss Distance: </span>
          {missDistance}
        </p>
        <p>
          <span>Orbiting Body: </span>
          {closestApproach.orbiting_body}
        </p>
        <p>
          <span>Relative Velocity: </span>
          {relativeVelocity}
        </p>
      </div>
      <button onClick={handleBack}>Go Back</button>
    </section>
  );
}

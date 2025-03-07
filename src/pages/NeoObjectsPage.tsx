import { useOutletContext } from "react-router-dom";
import "./NeoObjectsPage.css";
import { NeoOutletContext } from "../types";

export function NeoObjectPage() {
  const {
    currentNeos,
    currentDate,
    dates,
    currentPage,
    handlePrevious,
    handleNext,
  } = useOutletContext<NeoOutletContext>();

  return (
    <div className="neo-objects-section">
      <h2>Date: {currentDate}</h2>

      <div className="neo-list">
        {currentNeos.map((neo) => (
          <div key={neo.id} className="neo-item">
            <h3>{neo.name}</h3>
            <div className="neo-details">
              <p>
                Diameter:{" "}
                {neo.estimated_diameter.kilometers.estimated_diameter_min.toFixed(
                  3
                )}{" "}
                -{" "}
                {neo.estimated_diameter.kilometers.estimated_diameter_max.toFixed(
                  3
                )}{" "}
                km
              </p>
              <p>
                Velocity:{" "}
                {parseFloat(
                  neo.close_approach_data[0].relative_velocity
                    .kilometers_per_hour
                ).toLocaleString()}{" "}
                km/h
              </p>
              <p
                className={`hazard-status ${
                  neo.is_potentially_hazardous_asteroid ? "danger" : "safe"
                }`}
              >
                {neo.is_potentially_hazardous_asteroid ? "⚠ Hazardous" : "Safe"}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="neo-object-page-controls">
        <button onClick={handlePrevious} disabled={currentPage === 0}>
          Previous
        </button>

        <span>
          ({currentPage + 1} of {dates.length})
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === dates.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

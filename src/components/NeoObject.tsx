import { NEO } from "../types";

export function NeoObject({
  neo,
  onClick,
}: {
  neo: NEO;
  onClick: (neoId: string) => void;
}) {
  return (
    <div key={neo.id} className="neo-item" onClick={() => onClick(neo.id)}>
      <h3>{neo.name}</h3>
      <div className="neo-details">
        <p>
          Diameter:{" "}
          {neo.estimated_diameter.kilometers.estimated_diameter_min.toFixed(3)}{" "}
          -{" "}
          {neo.estimated_diameter.kilometers.estimated_diameter_max.toFixed(3)}{" "}
          km
        </p>
        <p>
          Velocity:{" "}
          {parseFloat(
            neo.close_approach_data[0].relative_velocity.kilometers_per_hour
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
  );
}

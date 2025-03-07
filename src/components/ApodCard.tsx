import { APODData } from "../types";

export function ApodCard({
  apod,
  onClick,
}: {
  apod: APODData;
  onClick: (apodTitle: string) => void;
}) {
  return (
    <div
      key={apod.title}
      className="apod-image"
      onClick={() => onClick(apod.title)}
    >
      <div className="apod-slider">
        <h3>{apod.title}</h3>
        <p>{apod.date}</p>
      </div>
      <img src={apod.url} alt={apod.title} />
    </div>
  );
}

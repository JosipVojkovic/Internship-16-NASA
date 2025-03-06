import { useState } from "react";
import "./MarsRoverPage.css";
import { APODData } from "../types/types";
import { Spinner } from "../components/Spinner";
import curiosityRover from "../assets/images/curiosityRover.jpg";
import opportunityRover from "../assets/images/opportunityRover.jpg";
import spiritRover from "../assets/images/spiritRover.jpg";
import securityCamera from "../assets/images/securityCamera.png";

export function MarsRoverPage() {
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<APODData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  return (
    <section className="mars-rover-section">
      <h1>Mars Rover</h1>
      <div className="mars-rovers-container">
        <div className="rover">
          <h3>Curiosity</h3>
          <img src={curiosityRover} alt="" />
        </div>

        <div className="rover">
          <h3>Opportunity</h3>
          <img src={opportunityRover} alt="" />
        </div>

        <div className="rover">
          <h3>Spirit</h3>
          <img src={spiritRover} alt="" />
        </div>
      </div>

      <div className="rover-cameras-container">
        <h3>
          Cameras
          <img src={securityCamera} alt="" />
        </h3>
        <div className="rover-cameras">
          <label htmlFor="FHAZ">
            FHAZ
            <input type="radio" name="camera" id="FHAZ" />
          </label>
          <label htmlFor="RHAZ">
            RHAZ
            <input type="radio" name="camera" id="RHAZ" />
          </label>
          <label htmlFor="MAST">
            MAST
            <input type="radio" name="camera" id="MAST" />
          </label>
          <label htmlFor="CHEMCAM">
            CHEMCAM
            <input type="radio" name="camera" id="CHEMCAM" />
          </label>
          <label htmlFor="MAHLI">
            MAHLI
            <input type="radio" name="camera" id="MAHLI" />
          </label>
          <label htmlFor="MARDI">
            MARDI
            <input type="radio" name="camera" id="MARDI" />
          </label>
          <label htmlFor="NAVCAM">
            NAVCAM
            <input type="radio" name="camera" id="NAVCAM" />
          </label>
          <label htmlFor="PANCAM">
            PANCAM
            <input type="radio" name="camera" id="PANCAM" />
          </label>
          <label htmlFor="MINITES">
            MINITES
            <input type="radio" name="camera" id="MINITES" />
          </label>
        </div>
      </div>
    </section>
  );
}

import { useNavigate, useOutletContext } from "react-router-dom";
import "./NeoObjectsPage.css";
import { NeoOutletContext } from "../types";
import { NeoObject } from "../components/NeoObject";

export function NeoObjectPage() {
  const {
    currentNeos,
    currentDate,
    dates,
    currentPage,
    handlePrevious,
    handleNext,
  } = useOutletContext<NeoOutletContext>();

  const navigate = useNavigate();

  const handleNeoCardClick = (neoId: string) => {
    const selectedNeo = currentNeos.find((n) => n.id === neoId);

    window.scrollTo(0, 0);

    navigate(`/neo-tracker/${neoId}`, {
      state: {
        neo: selectedNeo,
      },
      replace: false,
    });
  };

  return (
    <div className="neo-objects-section">
      <h2>Date: {currentDate}</h2>

      <div className="neo-list">
        {currentNeos.map((neo) => (
          <NeoObject neo={neo} onClick={handleNeoCardClick} />
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

import "./Navbar.css";
import nasaLogo from "../assets/images/NASA-logo.png";
import { NavLink } from "react-router-dom";

export function Navbar({
  handleModeChange,
  darkMode,
}: {
  handleModeChange: () => void;
  darkMode: boolean;
}) {
  return (
    <nav className={`main-nav ${darkMode ? "main-nav-dark" : ""}`}>
      <div className="logo">
        <img src={nasaLogo} alt="NASA logo" />
      </div>
      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/apod"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          APOD
        </NavLink>
        <NavLink
          to="/mars-rover"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Mars Rover
        </NavLink>
        <NavLink
          to="/neo-tracker"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          NEO
        </NavLink>
        <NavLink
          to="/earth-imagery"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Earth Imagery
        </NavLink>

        <button onClick={handleModeChange}>Toggle Mode</button>
      </div>
    </nav>
  );
}

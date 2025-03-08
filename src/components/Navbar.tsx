import "./Navbar.css";
import nasaLogo from "../assets/images/NASA-logo.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export function Navbar({
  handleModeChange,
  darkMode,
}: {
  handleModeChange: () => void;
  darkMode: boolean;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 650) {
        closeMenu();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        !(e.target as Element).closest(".mobile-menu") &&
        !(e.target as Element).closest(".hamburger")
      ) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <nav className={`main-nav ${darkMode ? "main-nav-dark" : ""}`}>
      <div className="logo">
        <img src={nasaLogo} alt="NASA logo" />
      </div>
      <div className="nav-links">
        <div className="desktop-links">
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
        </div>

        <button onClick={handleModeChange}>Toggle Mode</button>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${darkMode ? "dark" : ""}`} />
          <div className={`bar ${darkMode ? "dark" : ""}`} />
          <div className={`bar ${darkMode ? "dark" : ""}`} />
        </div>
      </div>

      <div
        className={`mobile-menu ${isMenuOpen ? "open" : ""} ${
          darkMode ? "dark" : ""
        }`}
      >
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/apod" onClick={closeMenu}>
          APOD
        </NavLink>
        <NavLink to="/mars-rover" onClick={closeMenu}>
          Mars Rover
        </NavLink>
        <NavLink to="/neo-tracker" onClick={closeMenu}>
          NEO
        </NavLink>
        <NavLink to="/earth-imagery" onClick={closeMenu}>
          Earth Imagery
        </NavLink>
      </div>
    </nav>
  );
}

import "./Navbar.css";
import nasaLogo from "../assets/images/NASA-logo.png";

export function Navbar() {
  return (
    <nav className="main-nav">
      <div className="logo">
        <img src={nasaLogo} alt="NASA logo" />
      </div>
      <ul>
        <li>APOD</li>
        <li>Mars Rover</li>
        <li>NEO</li>
        <li>Earth Imagery</li>
      </ul>
    </nav>
  );
}

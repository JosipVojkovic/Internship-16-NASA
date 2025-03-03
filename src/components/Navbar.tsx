import "./Navbar.css";
import nasaLogo from "../assets/images/NASA-logo.png";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="main-nav">
      <div className="logo">
        <img src={nasaLogo} alt="NASA logo" />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/apod">APOD</Link>
        <Link to="/mars-rover">Mars Rover</Link>
        <Link to="/neo-tracker">NEO</Link>
        <Link to="/earth-imagery">Earth Imagery</Link>
      </div>
    </nav>
  );
}

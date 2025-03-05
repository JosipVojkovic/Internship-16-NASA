import telescope from "../assets/images/telescope.png";
import marsRover from "../assets/images/marsRover.png";
import tracker from "../assets/images/radar.png";
import earth from "../assets/images/earth.png";
import "./HomePage.css";

export function HomePage() {
  return (
    <>
      <header>
        <div className="header-text">
          <h1>Exploring the Universe, One Discovery at a Time</h1>
          <p>
            Space is vast, mysterious, and full of wonders waiting to be
            discovered. With NASA Explorer, you can dive into the latest space
            imagery, track near-Earth objects, explore Mars through rover
            photos, and witness the beauty of our planet from above. Powered by
            NASA's open APIs, this app brings the cosmos closer than ever
            before.
          </p>
        </div>
      </header>

      <section className="navigation-cards">
        <div className="navigation-cards-header">
          <h2>Embark on Your Space Journey</h2>
          <p>
            These interactive cards allow you to navigate through different
            sections of our universe. Click on each to discover stunning space
            images, track missions, and explore real-time data from NASA’s space
            explorations.
          </p>
        </div>

        <div className="navigation-cards-container">
          <div className="navigation-card">
            <img src={telescope} alt="Hubble telecope icon" />
            <h3>Astronomy Picture of the Day (APOD) Gallery</h3>
            <p>
              Explore a daily selection of awe-inspiring space images curated by
              NASA.
            </p>
          </div>

          <div className="navigation-card">
            <img src={marsRover} alt="Mars rover icon" />
            <h3>Mars Rover Photos</h3>
            <p>
              View the latest photos from NASA’s rovers exploring the surface of
              Mars.
            </p>
          </div>

          <div className="navigation-card">
            <img src={tracker} alt="Radar icon" />
            <h3>Near Earth Objects (NEO) Tracker</h3>
            <p>
              Track asteroids and other near-Earth objects that come close to
              our planet.
            </p>
          </div>

          <div className="navigation-card">
            <img src={earth} alt="Eath imagery icon" />
            <h3>Earth Imagery</h3>
            <p>
              Discover stunning satellite images of Earth, updated in real-time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

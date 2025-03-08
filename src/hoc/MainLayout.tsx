import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import { useState } from "react";

export function MainLayout() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleModeChange = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <>
      <Navbar handleModeChange={handleModeChange} darkMode={darkMode} />
      <Outlet context={{ darkMode }} />
    </>
  );
}

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./constants/routes";
import { MainLayout } from "./hoc/MainLayout";
import {
  ApodDetailsPage,
  ApodPage,
  EarthImageryPage,
  HomePage,
  MarsRoverPage,
  NeoTrackerPage,
  PageNotFound,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={routes.HOME} element={<HomePage />} />
          <Route path={routes.APOD} element={<ApodPage />} />
          <Route path={routes.APOD_DETAILS} element={<ApodDetailsPage />} />
          <Route path={routes.MARS_ROVER} element={<MarsRoverPage />} />
          <Route path={routes.NEO_TRACKER} element={<NeoTrackerPage />} />
          <Route path={routes.EARTH_IMAGERY} element={<EarthImageryPage />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

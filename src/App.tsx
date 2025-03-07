import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./constants/routes";
import { MainLayout } from "./hoc/MainLayout";
import {
  ApodDetailsPage,
  ApodPage,
  EarthImageryPage,
  HomePage,
  MarsRoverPage,
  MarsRoverPhotoPage,
  NeoObjectPage,
  PageNotFound,
} from "./pages";
import { NeoTrackerLayout } from "./hoc";
import { NeoStatsPage } from "./pages/NeoStatsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={routes.HOME} element={<HomePage />} />
          <Route path={routes.APOD} element={<ApodPage />} />
          <Route path={routes.APOD_DETAILS} element={<ApodDetailsPage />} />
          <Route path={routes.MARS_ROVER} element={<MarsRoverPage />} />
          <Route
            path={routes.MARS_ROVER_DETAILS}
            element={<MarsRoverPhotoPage />}
          />
          <Route path={routes.EARTH_IMAGERY} element={<EarthImageryPage />} />

          <Route element={<NeoTrackerLayout />}>
            <Route path={routes.NEO_TRACKER} element={<NeoObjectPage />} />
            <Route path={routes.NEO_VISUALIZATION} element={<NeoStatsPage />} />
          </Route>
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

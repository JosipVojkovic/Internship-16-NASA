import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./constants/routes";
import { MainLayout } from "./hoc/MainLayout";
import {
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
          <Route path={routes.HOME} element={<HomePage />}></Route>
          <Route path={routes.APOD} element={<ApodPage />}></Route>
          <Route path={routes.MARS_ROVER} element={<MarsRoverPage />}></Route>
          <Route path={routes.NEO_TRACKER} element={<NeoTrackerPage />}></Route>
          <Route
            path={routes.EARTH_IMAGERY}
            element={<EarthImageryPage />}
          ></Route>
          <Route
            path={routes.PAGE_NOT_FOUND}
            element={<PageNotFound />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

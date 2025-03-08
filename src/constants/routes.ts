import { Routes } from "../types/types";

export const routes: Routes = {
  HOME: "/",
  APOD: "/apod",
  APOD_DETAILS: "/apod/:apodTitle",
  MARS_ROVER: "/mars-rover",
  MARS_ROVER_DETAILS: "/mars-rover/:photoId",
  NEO_TRACKER: "/neo-tracker",
  NEO_VISUALIZATION: "/neo-tracker/visualisation",
  NEO_DETAILS: "/neo-tracker/:neoId",
  EARTH_IMAGERY: "/earth-imagery",
  PAGE_NOT_FOUND: "/404",
};

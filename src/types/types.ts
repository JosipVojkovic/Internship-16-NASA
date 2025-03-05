export type Routes = {
  [key: string]: string;
};

export type FetchResult<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

export type APODData = {
  date: "2013-08-04";
  explanation: "Like the downtown area of your favorite city and any self-respecting web site ... Io's surface is constantly under construction. This moon of Jupiter holds the distinction of being the Solar System's most volcanically active body -- its bizarre looking surface continuously formed and reformed by lava flows. Generated using 1996 data from NASA's Galileo spacecraft, this high resolution composite image is centered on the side of Io that always faces away from Jupiter. It has been enhanced to emphasize Io's surface brightness and color variations, revealing features as small as 1.5 miles across. The notable absence of impact craters suggests that the entire surface is covered with new volcanic deposits much more rapidly than craters are created. What drives this volcanic powerhouse? A likely energy source is the changing gravitational tides caused by Jupiter and the other Galilean moons as Io orbits the massive gas giant planet. Heating Io's interior, the pumping tides would generate the sulfurous volcanic activity.";
  hdurl: "https://apod.nasa.gov/apod/image/1308/ioplus_galileo_1817.jpg";
  media_type: "image";
  service_version: "v1";
  title: "Io's Surface: Under Construction";
  url: "https://apod.nasa.gov/apod/image/1308/ioplus_galileo_960.jpg";
};

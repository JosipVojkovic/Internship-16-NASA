export type MarsRoverPhotos = {
  photos: MarsRoverPhoto[];
};

export type MarsRoverPhoto = {
  id: number;
  img_src: string;
  earth_date: string;
  sol: number;
  camera: MarsRoverCamera;
  rover: MarsRover;
};

export type MarsRoverCamera = {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
};

export type MarsRover = {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
};

export type MarsRoverFilter = {
  rover: "" | "curiosity" | "opportunity" | "spirit";
  date: "";
  camera:
    | ""
    | "fhaz"
    | "rhaz"
    | "mast"
    | "chemcam"
    | "mahli"
    | "mardi"
    | "navcam"
    | "pancam"
    | "minites";
};

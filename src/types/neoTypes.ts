export type NeoOutletContext = {
  currentNeos: any[];
  currentDate: string;
  dates: string[];
  currentPage: number;
  handlePrevious: () => void;
  handleNext: () => void;
};

export type NEOByDate = {
  [date: string]: NEO[];
};

export type NEO = {
  links: NEOLinks;
  id: string;
  neo_reference_id: string;
  name: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: EstimatedDiameter;
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: CloseApproachData[];
  is_sentry_object: boolean;
};

export type NEOLinks = {
  self: string;
};

export type EstimatedDiameter = {
  kilometers: DiameterValues;
  meters: DiameterValues;
  miles: DiameterValues;
  feet: DiameterValues;
};

export type DiameterValues = {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
};

export type CloseApproachData = {
  close_approach_date: string;
  close_approach_date_full: string;
  epoch_date_close_approach: number;
  relative_velocity: NEOVelocity;
  miss_distance: NEOMissDistance;
  orbiting_body: string;
};

export type NEOVelocity = {
  kilometers_per_second: string;
  kilometers_per_hour: string;
  miles_per_hour: string;
};

export type NEOMissDistance = {
  astronomical: string;
  lunar: string;
  kilometers: string;
  miles: string;
};

export const getLocationEarthImage = (lat: number, lon: number) => {
  return {
    endpoint: `planetary/earth/assets?date=2025-01-01&dim=0.25`,
    params: {
      lat,
      lon,
    },
  };
};

export const getRoverPhotos = (
  rover: string,
  earth_date: string,
  camera: string
) => {
  return {
    endpoint: `mars-photos/api/v1/rovers/${rover}/photos`,
    params: {
      earth_date,
      ...(camera !== "" && { camera }),
    },
  };
};

import { fetchFromAPI } from "./api";

export const fetchAPOD = async (date?: string) => {
  const endpoint = "planetary/apod";
  const params = date ? { date } : {};
  return await fetchFromAPI(endpoint, params);
};

export const fetchAPODsForLastDays = async (days: number = 20) => {
  const endpoint = "planetary/apod";
  const params = { count: days.toString() };
  return await fetchFromAPI(endpoint, params);
};

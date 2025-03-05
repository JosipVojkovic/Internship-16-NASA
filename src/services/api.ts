const API_KEY: string = import.meta.env.VITE_NASA_API_KEY || "";

const BASE_URL = "https://api.nasa.gov/";

export const fetchFromAPI = async (endpoint: string, params: object = {}) => {
  if (!API_KEY) {
    throw new Error("API key is missing! Please check your .env file.");
  }

  const url = new URL(endpoint, BASE_URL);
  url.searchParams.append("api_key", API_KEY);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.append(key, value as string);
  }

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error("API request failed");
  }
  return response.json();
};

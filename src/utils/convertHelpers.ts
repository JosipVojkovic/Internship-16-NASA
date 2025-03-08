export const useUnitConverter = (
  value: number,
  unit: "kilometers" | "miles"
) => {
  return unit === "kilometers"
    ? `${value.toFixed(2)} km`
    : `${(value * 0.621371).toFixed(2)} mi`;
};

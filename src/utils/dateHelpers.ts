export const formattedDate = (date: Date) => {
  return date.toISOString().split("T")[0];
};

export const getDateXDaysAgo = (daysAgo: number) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return formattedDate(date);
};

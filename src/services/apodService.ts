import { getDateXDaysAgo } from "../utils/dateHelpers";

export const getAPODsForLast20DaysParams = (page: number) => {
  const startDate = getDateXDaysAgo(page * 20);
  const endDate = getDateXDaysAgo(page * 20 - 19);

  return {
    endpoint: "planetary/apod",
    params: {
      start_date: startDate,
      end_date: endDate,
    },
  };
};

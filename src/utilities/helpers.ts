import dayjs from "dayjs";

// Get the date in the format "MMM DD, YYYY - HH:mm"
export const getDate = (startDate: string, endDate: string) => {
  const start = dayjs(startDate).format("MMM DD, YYYY - HH:mm");
  const end = dayjs(endDate).format("MMM DD, YYYY - HH:mm");

  return `${start} - ${end}`;
};

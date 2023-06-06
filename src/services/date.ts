export const nextMonth = (): string => {
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const nextMonthIndex = (currentDate.getMonth() + 1) % 12;
  return months[nextMonthIndex];
};

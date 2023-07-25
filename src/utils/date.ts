export function getNextMonth(): string {
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
  return months[nextMonthIndex]!;
}

  export const getYearTwoDigits = () => {
    const currentYear = new Date().getFullYear();
    return currentYear.toString().slice(-2);
  }

  export const getYear = () => {
    const currentYear = new Date().getFullYear();
    return currentYear.toString()
}

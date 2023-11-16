export function nextMonth() {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const currentDate = new Date()

  const nextMonth = new Date(currentDate)
  nextMonth.setMonth(currentDate.getMonth() + 1)

  return monthNames[nextMonth.getMonth()]
}

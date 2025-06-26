export const formatDate = (month?: number, year?: number) => {
  if (!month || !year) {
    // If either month or year is not provided, return null
    return null;
  }

  // Construct a valid Date from month/year (day = 1)
  const date = new Date(year, month - 1);
  return date.toLocaleString('default', { month: 'short', year: 'numeric' });
};

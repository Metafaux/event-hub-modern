const FIRST_DAY = 1;
const MONTH_INCREMENT = 1;

// https://stackoverflow.com/questions/222309/calculate-last-day-of-month

export const daysInMonth = (date: Date) => {
  const BOTTOM_3_BITS = 3;
  const BOTTOM_4_BITS = 15;
  const YEAR_MULTIPLE_25 = 25;
  const FEBRUARY = 2;
  const BIT_RESULT_1 = 1;
  const DAY_COUNT_28 = 28;
  const DAY_COUNT_29 = 29;
  const DAY_COUNT_30 = 30;
  const year = date.getFullYear();
  const month = date.getMonth() + MONTH_INCREMENT;
  return month === FEBRUARY
    ? year & BOTTOM_3_BITS ||
      (!(year % YEAR_MULTIPLE_25) && year & BOTTOM_4_BITS)
      ? DAY_COUNT_28
      : DAY_COUNT_29
    : DAY_COUNT_30 + ((month + (month >> BOTTOM_3_BITS)) & BIT_RESULT_1);
};

// returns date of Sunday before/on day 1 of month.
export const firstSundayOfMonthView = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDate = new Date(year, month, FIRST_DAY);
  const dayOfWeekThatMonthBegins = firstDate.getDay();
  firstDate.setDate(FIRST_DAY - dayOfWeekThatMonthBegins);
  return firstDate;
};

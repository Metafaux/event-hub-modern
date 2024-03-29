/* eslint-disable no-magic-numbers */
import { daysInMonth, firstSundayOfMonthView } from './utils';

describe('Calendar logic', () => {
  it('returns the correct number of days in a month', () => {
    // January
    expect(daysInMonth(new Date(2024, 0, 1))).toEqual(31);
    // February
    expect(daysInMonth(new Date(2023, 1, 2))).toEqual(28);
    // February Leap
    expect(daysInMonth(new Date(2024, 1, 3))).toEqual(29);
    // March
    expect(daysInMonth(new Date(2024, 2, 4))).toEqual(31);
    // April
    expect(daysInMonth(new Date(2024, 3, 5))).toEqual(30);
    // May
    expect(daysInMonth(new Date(2024, 4, 6))).toEqual(31);
    // June
    expect(daysInMonth(new Date(2024, 5, 7))).toEqual(30);
    // July
    expect(daysInMonth(new Date(2024, 6, 8))).toEqual(31);
    // August
    expect(daysInMonth(new Date(2024, 7, 9))).toEqual(31);
    // September
    expect(daysInMonth(new Date(2024, 8, 10))).toEqual(30);
    // October
    expect(daysInMonth(new Date(2024, 9, 11))).toEqual(31);
    // November
    expect(daysInMonth(new Date(2024, 10, 30))).toEqual(30);
    // December
    expect(daysInMonth(new Date(2024, 11, 31))).toEqual(31);
  });

  it('finds the date of the first Sunday to display in month view', () => {
    const januaryFirstSunday = firstSundayOfMonthView(new Date(2024, 0, 1));
    expect(januaryFirstSunday.getDate()).toEqual(31);
    expect(januaryFirstSunday.getDay()).toEqual(0);

    expect(firstSundayOfMonthView(new Date(2024, 1, 20)).getDate()).toEqual(28);
    expect(firstSundayOfMonthView(new Date(2024, 2, 30)).getDate()).toEqual(25);
    expect(firstSundayOfMonthView(new Date(2024, 3, 2)).getDate()).toEqual(31);
    expect(firstSundayOfMonthView(new Date(2024, 4, 31)).getDate()).toEqual(28);
    expect(firstSundayOfMonthView(new Date(2024, 5, 15)).getDate()).toEqual(26);
    expect(firstSundayOfMonthView(new Date(2024, 6, 1)).getDate()).toEqual(30);
    expect(firstSundayOfMonthView(new Date(2024, 7, 1)).getDate()).toEqual(28);
    expect(firstSundayOfMonthView(new Date(2024, 8, 1)).getDate()).toEqual(1);
    expect(firstSundayOfMonthView(new Date(2024, 9, 1)).getDate()).toEqual(29);
    expect(firstSundayOfMonthView(new Date(2024, 10, 1)).getDate()).toEqual(27);
    expect(firstSundayOfMonthView(new Date(2024, 11, 1)).getDate()).toEqual(1);
  });
});

/* eslint-disable no-magic-numbers */
import { daysInMonth, firstSundayOfMonthView, getMonthGridData } from './utils';

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

  it('gets month grid data', () => {
    const januaryGrid = [
      [
        'Sun Dec 31 2023',
        'Mon Jan 01 2024',
        'Tue Jan 02 2024',
        'Wed Jan 03 2024',
        'Thu Jan 04 2024',
        'Fri Jan 05 2024',
        'Sat Jan 06 2024'
      ],
      [
        'Sun Jan 07 2024',
        'Mon Jan 08 2024',
        'Tue Jan 09 2024',
        'Wed Jan 10 2024',
        'Thu Jan 11 2024',
        'Fri Jan 12 2024',
        'Sat Jan 13 2024'
      ],
      [
        'Sun Jan 14 2024',
        'Mon Jan 15 2024',
        'Tue Jan 16 2024',
        'Wed Jan 17 2024',
        'Thu Jan 18 2024',
        'Fri Jan 19 2024',
        'Sat Jan 20 2024'
      ],
      [
        'Sun Jan 21 2024',
        'Mon Jan 22 2024',
        'Tue Jan 23 2024',
        'Wed Jan 24 2024',
        'Thu Jan 25 2024',
        'Fri Jan 26 2024',
        'Sat Jan 27 2024'
      ],
      [
        'Sun Jan 28 2024',
        'Mon Jan 29 2024',
        'Tue Jan 30 2024',
        'Wed Jan 31 2024',
        'Thu Feb 01 2024',
        'Fri Feb 02 2024',
        'Sat Feb 03 2024'
      ]
    ];
    expect(getMonthGridData(new Date(2024, 0, 1))).toEqual(januaryGrid);
  });
});

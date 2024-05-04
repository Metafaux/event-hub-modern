// https://stackoverflow.com/questions/222309/calculate-last-day-of-month

import { CmsEventItem } from '../../types/CmsWordpressTypes';

const INCREMENT = 1;
const TWO_DIGIT_STRING = 2;

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
  const month = date.getMonth() + INCREMENT;
  return month === FEBRUARY
    ? year & BOTTOM_3_BITS ||
      (!(year % YEAR_MULTIPLE_25) && year & BOTTOM_4_BITS)
      ? DAY_COUNT_28
      : DAY_COUNT_29
    : DAY_COUNT_30 + ((month + (month >> BOTTOM_3_BITS)) & BIT_RESULT_1);
};

// returns date of Sunday before/on day 1 of month.
export const firstSundayOfMonthView = (date: Date) => {
  const FIRST_DAY = 1;
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDate = new Date(year, month, FIRST_DAY);
  const dayOfWeekThatMonthBegins = firstDate.getDay();
  firstDate.setDate(FIRST_DAY - dayOfWeekThatMonthBegins);
  return firstDate;
};

const getYearMonthIndex = (date: Date) => {
  const addsTwoZeroes = 100;
  return date.getFullYear() * addsTwoZeroes + date.getMonth();
};

export const getMonthGridData = (date: Date) => {
  const DAYS_IN_WEEK = 7;
  const monthToRenderIndex = getYearMonthIndex(date);
  const renderDate = firstSundayOfMonthView(date);

  const weeks: string[][] = [];

  // check only if SUNDAY is less than subsequent month
  while (getYearMonthIndex(renderDate) <= monthToRenderIndex) {
    const days: string[] = [];
    for (let i = 0; i < DAYS_IN_WEEK; i++) {
      days.push(renderDate.getDate().toString());
      renderDate.setDate(renderDate.getDate() + INCREMENT);
    }
    weeks.push(days);
  }

  return weeks;
};

/** sortEventsByDate
 *
 * Returns a lookup object for event ids and a lookup object for events by month and day.
 *
 * When function receives ISO 8601 date strings from CMS, it converts them to Date objects.
 * ISO 8601 month date format is base-1 (i.e. January is 1, December is 12).
 * JavaScript month date format is base-0 (i.e. January is 0, December is 11).
 *
 * @param events CmsEventItem[]
 * @returns { eventIdLookup: Record<string, CmsEventItem>, monthLookup: Record<string, Record<string, string[]>}
 */
export const sortEventsByDate = (events: CmsEventItem[]) => {
  const eventIdLookup: Record<string, CmsEventItem> = {};
  // pattern: month202403: { day01: id[], day02: id[] }
  const monthLookup: Record<string, Record<string, string[]>> = {};

  events.forEach((event) => {
    const eventStart = new Date(event.acf.event_date_time);
    const paddedMonthIndex = eventStart
      .getMonth()
      .toString()
      .padStart(TWO_DIGIT_STRING, '0');
    const monthKey = `month${eventStart.getFullYear()}${paddedMonthIndex}`;

    if (!monthLookup[monthKey]) monthLookup[monthKey] = {};
    const paddedDayIndex =
      'day' + eventStart.getDate().toString().padStart(TWO_DIGIT_STRING, '0');
    if (!monthLookup[monthKey][paddedDayIndex])
      monthLookup[monthKey][paddedDayIndex] = [];
    monthLookup[monthKey][paddedDayIndex].push(event.id.toString());

    eventIdLookup['event' + event.id.toString()] = event;
  });

  return { eventIdLookup, monthLookup };
};

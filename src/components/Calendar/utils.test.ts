/* eslint-disable no-magic-numbers */
import { CmsEventItem } from '../../types/CmsWordpressTypes';
import {
  daysInMonth,
  firstSundayOfMonthView,
  getMonthGridData,
  sortEventsByDate
} from './utils';

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
      ['31', '1', '2', '3', '4', '5', '6'],
      ['7', '8', '9', '10', '11', '12', '13'],
      ['14', '15', '16', '17', '18', '19', '20'],
      ['21', '22', '23', '24', '25', '26', '27'],
      ['28', '29', '30', '31', '1', '2', '3']
    ];
    expect(getMonthGridData(new Date(2024, 0, 1))).toEqual(januaryGrid);
  });

  it('creates an id lookup and month lookup for events', () => {
    const events: CmsEventItem[] = [
      {
        id: 22,
        date_gmt: '2024-01-02T00:00:00',
        modified_gmt: '2024-01-02T00:00:00',
        type: 'event',
        title: { rendered: 'Event 2' },
        acf: {
          event_address: '456 Main St',
          event_date_time: '2024-01-02T00:00:00',
          venue_name: 'Venue 2',
          event_description: 'Description 2'
        },
        meta: { _acf_changed: false }
      },
      {
        id: 21,
        date_gmt: '2024-01-01T00:00:00',
        modified_gmt: '2024-01-01T00:00:00',
        type: 'event',
        title: { rendered: 'Event 1' },
        acf: {
          event_address: '123 Main St',
          event_date_time: '2024-01-01T00:00:00',
          venue_name: 'Venue 1',
          event_description: 'Description 1'
        },
        meta: { _acf_changed: false }
      }
    ];

    expect(sortEventsByDate(events)).toEqual({
      eventIdLookup: {
        event21: {
          id: 21,
          date_gmt: '2024-01-01T00:00:00',
          modified_gmt: '2024-01-01T00:00:00',
          type: 'event',
          title: { rendered: 'Event 1' },
          acf: {
            event_address: '123 Main St',
            event_date_time: '2024-01-01T00:00:00',
            venue_name: 'Venue 1',
            event_description: 'Description 1'
          },
          meta: { _acf_changed: false }
        },
        event22: {
          id: 22,
          date_gmt: '2024-01-02T00:00:00',
          modified_gmt: '2024-01-02T00:00:00',
          type: 'event',
          title: { rendered: 'Event 2' },
          acf: {
            event_address: '456 Main St',
            event_date_time: '2024-01-02T00:00:00',
            venue_name: 'Venue 2',
            event_description: 'Description 2'
          },
          meta: { _acf_changed: false }
        }
      },
      monthLookup: {
        month202400: {
          day01: ['21'],
          day02: ['22']
        }
      }
    });
  });
});

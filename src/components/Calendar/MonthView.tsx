import { daysInMonth } from './utils';

interface CalendarProps {
  date: Date;
}

const FIRST_DAY = 1;

const firstDayOfMonth = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  return new Date(year, month, FIRST_DAY).getDay();
};

/**
 * CalendarMonthView
 *
 * TODO: Try a table instead of div
 * - refactor loops, rename DEFAULT_DAY
 *
 * @param date Date object
 */

const CalendarMonthView = ({ date }: CalendarProps) => {
  const renderDays = () => {
    const totalDays = daysInMonth(date);
    const startingDay = firstDayOfMonth(date);
    const days = [];

    for (let i = 0; i < startingDay; i++) {
      days.push(<td key={`empty-${i}`} className="empty-day"></td>);
    }

    for (let i = 1; i <= totalDays; i++) {
      days.push(
        <td key={`day-${i}`} className="day">
          {i}
        </td>
      );
    }

    return days;
  };

  return (
    <table className="calendar">
      <tbody>
        <tr className="days-header">
          <td>Sun</td>
          <td>Mon</td>
          <td>Tue</td>
          <td>Wed</td>
          <td>Thu</td>
          <td>Fri</td>
          <td>Sat</td>
        </tr>
        <tr className="days">{renderDays()}</tr>
      </tbody>
    </table>
  );
};

export default CalendarMonthView;

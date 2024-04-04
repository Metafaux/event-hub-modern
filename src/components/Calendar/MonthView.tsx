import { getMonthGridData } from './utils';
import styles from './MonthView.module.scss';

interface CalendarProps {
  date: Date;
}

/**
 * CalendarMonthView
 *
 * @param date Date object
 */

const CalendarMonthView = ({ date }: CalendarProps) => {
  const renderWeeks = () => {
    const FIRST_INDEX = 0;
    const monthGridData = getMonthGridData(date);
    return monthGridData.map((week, i) => (
      <tr key={`week-${week[FIRST_INDEX]}`} className="weekRow">
        {week.map((day, j) => (
          <td key={`day-${day}`} className={styles.dayCell}>
            {day}
          </td>
        ))}
      </tr>
    ));
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
        {renderWeeks()}
      </tbody>
    </table>
  );
};

export default CalendarMonthView;

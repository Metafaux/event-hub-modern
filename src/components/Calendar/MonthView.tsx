import { getMonthGridData } from './utils';
import styles from './MonthView.module.scss';

interface CalendarProps {
  date: Date;
}

const dayNameDisplayText = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/**
 * CalendarMonthView
 *
 * @param date Date object
 */

const CalendarMonthView = ({ date }: CalendarProps) => {
  const renderWeeks = () => {
    const FIRST_INDEX = 0;
    const monthGridData = getMonthGridData(date);
    return monthGridData.map((week) => (
      <tr key={`week-${week[FIRST_INDEX]}`} className="weekRow">
        {week.map((day) => (
          <td key={`day-${day}`} className={styles.dayCell}>
            <div>{day}</div>
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <table className={styles.calendarTable}>
      <tbody>
        <tr className={styles.daysHeader}>
          {dayNameDisplayText.map((day) => (
            <th key={day}>{day}</th>
          ))}
        </tr>
        {renderWeeks()}
      </tbody>
    </table>
  );
};

export default CalendarMonthView;

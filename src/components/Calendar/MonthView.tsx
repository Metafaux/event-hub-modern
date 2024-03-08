import React from 'react';

interface CalendarProps {
  date: Date;
}

const MONTH_INCREMENT = 1;
const DEFAULT_DAY = 0;
const FIRST_DAY = 1;

/**
 * CalendarMonthView
 *
 * TODO: Try a table instead of div
 * - refactor loops, rename DEFAULT_DAY
 *
 * @param date Date object
 */

const CalendarMonthView: React.FC<CalendarProps> = ({ date }) => {
  const daysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + MONTH_INCREMENT, DEFAULT_DAY).getDate();
  };

  const firstDayOfMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, FIRST_DAY).getDay();
  };

  const renderDays = () => {
    const totalDays = daysInMonth(date);
    const startingDay = firstDayOfMonth(date);
    const days = [];

    for (let i = 0; i < startingDay; i++) {
      days.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    for (let i = 1; i <= totalDays; i++) {
      days.push(
        <div key={`day-${i}`} className="day">
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar">
      <div className="days-header">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="days">{renderDays()}</div>
    </div>
  );
};

export default CalendarMonthView;

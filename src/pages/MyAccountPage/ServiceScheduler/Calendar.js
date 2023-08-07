import React from "react";
import Calendar from "react-calendar";
import "./ServiceSchedular.css";

const CustomCalendar = ({ onSelectDate }) => {
  return (
    <div className="calendar-container">
      <Calendar onChange={onSelectDate} value={null} />
    </div>
  );
};

export default CustomCalendar;

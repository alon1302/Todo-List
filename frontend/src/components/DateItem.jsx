import React from "react";

import "../style/DateItem.css";

const DateItem = ({ date }) => {
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  return (
    <div className="date-item">
      <div className="date-item__day">{day}</div>
      <div className="date-item__month">{month}</div>
      <div className="date-item__year">{year}</div>
    </div>
  );
};

export default DateItem;

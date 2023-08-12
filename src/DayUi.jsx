import React from "react";

const DayUi = (props) => {
  function day() {
    let date = new Date(props.date * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <h1 className="pt-5 text-center text-3xl font-semibold text-green-800 bg-white">
      {day()}
    </h1>
  );
};

export default DayUi;

import react, { useState, useEffect } from "react";
import "./time.css";

const Time = () => {
  const [actualTime, setActualTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
  );
  const [actualDate, setActualDate] = useState(new Date().toDateString());

  const getTime = () => {
    const time = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const date = new Date().toDateString();
    setActualTime(time);
    setActualDate(date);
  };

  useEffect(() => {
    //const interval = setInterval(() => getTime(), 1000);
    setInterval(getTime, 1000);
    clearInterval(actualDate);
    clearInterval(actualTime);
  });

  return (
    <div>
      <div className="time-today">Today</div>
      <div className="time-date">{actualDate}</div>
      <div className="time-time">{actualTime}</div>
    </div>
  );
};

export default Time;

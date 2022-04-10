import react, { useState, useEffect } from "react";
import "./time.scss";

const Time = () => {
  const [actualTime, setActualTime] = useState(
    new Date().toLocaleTimeString("en-US")
  );
  const [actualDate, setActualDate] = useState(new Date().toDateString());

  const getTime = () => {
    const time = new Date().toLocaleTimeString("en-US");
    const date = new Date().toDateString();
    setActualTime(time);
    setActualDate(date);
  };

  useEffect(() => {
    const intervalId = setInterval(getTime, 1000);
    return () => {
      clearInterval(intervalId);
    };
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

import { useState, useEffect } from "react";
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
    <div className="diary-time">
      <div className="diary-time-today">Today</div>
      <div className="diary-time-date">{actualDate}</div>
      <div className="diary-time-time">{actualTime}</div>
    </div>
  );
};

export default Time;

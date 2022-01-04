import react, { useState, useEffect } from "react";

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

  setInterval(getTime, 2000);

  return (
    <div>
      <div>Today</div>
      <div>{actualDate}</div>
      <div>{actualTime}</div>
    </div>
  );
};

export default Time;

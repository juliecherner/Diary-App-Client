import react from "react";

const Button = ({ text }) => {
  return <button onClick={(event) => console.log(event.target)}>{text}</button>;
};

export default Button;

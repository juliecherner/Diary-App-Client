import react from "react";
import Button from "../button/Button";

const Todo = ({ data, status, buttonsText }) => {
  const displaybuttonsText = () => {
    return buttonsText.map((buttonText, index) => {
      return <Button key={index} name={buttonText} text={buttonText} />;
    });
  };

  return (
    <div key={data.id}>
      <div>{status}</div>
      <div>{data.todo}</div>
      {displaybuttonsText()}
    </div>
  );
};

export default Todo;

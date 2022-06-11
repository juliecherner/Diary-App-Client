import DoneIcon from "@mui/icons-material/Done";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import "./todo-area.scss";

const TodoArea = ({ name, text, color }) => {
  return (
    <div className="diary-todo-area" style={{ backgroundColor: color }}>
      {name === "Done" ? <DoneIcon /> : <PauseCircleOutlineIcon />}
      <div>{text}</div>
    </div>
  );
};

export default TodoArea;

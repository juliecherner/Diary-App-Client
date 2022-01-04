import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./todo.css";

const Todo = ({ text, date, deleteTodo, moveToDone, moveToPostponed }) => {
  return (
    <div className="todo">
      <div className="todo-container">
        <div>{text}</div>
        <div>Created {date}</div>
      </div>

      <div className="todo-buttons">
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button color="error" onClick={() => deleteTodo(text)}>
            Delete
          </Button>
          <Button color="info">Edit</Button>
          <Button color="success" onClick={() => moveToDone(text)}>
            Done
          </Button>
          <Button color="warning" onClick={() => moveToPostponed(text)}>
            Postponed
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Todo;

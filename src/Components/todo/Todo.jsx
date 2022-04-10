import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./todo.scss";

const Todo = ({
  text,
  date,
  deleteTodo,
  editTodo,
  moveToDone,
  moveToPostponed,
}) => {
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
          <Button size="small" color="error" onClick={() => deleteTodo(text)}>
            Delete
          </Button>
          <Button size="small" color="info" onClick={() => editTodo(text)}>
            Edit
          </Button>
          <Button size="small" color="success" onClick={() => moveToDone(text)}>
            Done
          </Button>
          <Button
            size="small"
            color="warning"
            onClick={() => moveToPostponed(text)}
          >
            Postponed
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Todo;

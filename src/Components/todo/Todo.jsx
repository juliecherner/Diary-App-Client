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
  const todoButtonsConstants = [
    { color: "error", function: () => deleteTodo(text), text: "Delete" },
    { color: "info", function: () => editTodo(text), text: "Edit" },
    { color: "success", function: () => moveToDone(text), text: "Done" },
    {
      color: "warning",
      function: () => moveToPostponed(text),
      text: "Postponed",
    },
  ];

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
          {todoButtonsConstants.map((button) => (
            <Button
              key={button.text}
              size="small"
              color={button.color}
              onClick={button.function}
            >
              {button.text}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Todo;

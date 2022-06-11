import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editTodoText,
  deleteTodo,
  doneTodo,
  postponeTodo,
  getAllTodos,
} from "../../../../store/actions/todos.actions";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./todo.scss";

const todoButtonsConstants = [
  { color: "error", text: "Delete" },
  { color: "info", text: "Edit" },
  { color: "success", text: "Done" },
  { color: "warning", text: "Postpone" },
];

const Todo = ({ object }) => {
  console.log(object);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todosState);

  const formatDate = (date) => {
    return date.slice(0, 10);
  };

  const handleClick = (text, id) => {
    console.log("handleclick switch", text, id);

    switch (text) {
      case "Postpone":
        dispatch(postponeTodo(id));
        break;
      case "Done":
        dispatch(doneTodo(id));
        break;
      case "Delete":
        break;
      case "Edit":
        ///
        break;
      default:
        break;
    }
  };

  return (
    <div className="diary-todo">
      <div className="diary-todo-container">
        <div>{object.text}</div>
        <div>Created {formatDate(object.date)}</div>
      </div>

      <div className="diary--todo-buttons">
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          {todoButtonsConstants.map((button) => (
            <Button
              key={button.text}
              size="small"
              color={button.color}
              onClick={() => handleClick(button.text, object._id)}
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

import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  doneTodo,
  postponeTodo,
} from "../../../../store/actions/todos.actions";
import Button from "@mui/material/Button";
import EditTodo from "../editTodo/EditTodo";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./todo.scss";

const todoButtonsConstants = [
  { color: "error", text: "Delete" },
  { color: "info", text: "Edit" },
  { color: "success", text: "Done" },
  { color: "warning", text: "Postpone" },
];

const Todo = ({ object }) => {
  const [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch();

  const formatDate = (date) => {
    return date.slice(0, 10);
  };

  const handleClick = (text, id) => {
    switch (text) {
      case "Postpone":
        dispatch(postponeTodo(id));
        break;
      case "Done":
        dispatch(doneTodo(id));
        break;
      case "Delete":
        dispatch(deleteTodo(id));
        break;
      case "Edit":
        changeMode();
        break;
      default:
        break;
    }
  };

  const changeMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="diary-todo">
      {!editMode ? (
        <>
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
        </>
      ) : (
        <EditTodo todo={object} changeMode={changeMode} />
      )}
    </div>
  );
};

export default Todo;

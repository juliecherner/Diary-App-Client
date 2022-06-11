import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodoText } from "../../../../store/actions/todos.actions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./edittodo.scss";

const EditTodo = ({ todo, changeMode }) => {
  const dispatch = useDispatch();
  const [updatedText, setUpdatedText] = useState("");

  const changeTodoText = (text) => {
    if (text.length > 0) {
      dispatch(editTodoText(todo._id, text));
      changeMode();
    }
  };

  return (
    <div>
      <div>Previous text: {todo.text}</div>
      <form
        className="diary-edit-todo-form"
        onSubmit={(event) => event.preventDefault()}
      >
        <TextField
          fullWidth
          size="small"
          type="text"
          onChange={(event) => setUpdatedText(event.target.value)}
          value={updatedText}
          placeholder="Current text"
        />
        <Button onClick={() => changeTodoText(updatedText)} size="large">
          <div>Save</div>
        </Button>
        <Button onClick={() => changeMode()} size="large">
          <div>Return</div>
        </Button>
      </form>
    </div>
  );
};

export default EditTodo;

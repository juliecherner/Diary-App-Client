import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../../store/actions/todos.actions";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./addtodo.scss";

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState("");

  const dispatch = useDispatch();

  const addNewTodo = async (newTodo) => {
    if (newTodo.length > 0) {
      dispatch(addTodo({ text: newTodo }));
      setNewTodo("");
    }
  };

  return (
    <div>
      <form
        className="diary-add-todo-form"
        onSubmit={(event) => event.preventDefault()}
      >
        <TextField
          fullWidth
          size="small"
          type="text"
          placeholder="Add your todo"
          onChange={(event) => setNewTodo(event.target.value)}
          value={newTodo}
        />
        <Button onClick={() => addNewTodo(newTodo)} size="large">
          <AddIcon />
          <div>Add</div>
        </Button>
      </form>
    </div>
  );
};

export default AddTodo;

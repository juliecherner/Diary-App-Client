import { useDispatch } from "react-redux";
import {
  deleteAllTodos,
  deleteTodosNotInProgress,
} from "../../../../store/actions/todos.actions";
import Button from "@mui/material/Button";

const GlobalClearButtons = () => {
  const dispatch = useDispatch();

  const deleteGlobally = (name) => {
    if (name === "delete-all") {
      dispatch(deleteAllTodos());
    } else if (name === "delete-except-inprogress") {
      dispatch(deleteTodosNotInProgress());
    }
  };

  return (
    <div className="diary-todolist--clearbuttons">
      <Button
        name="delete-all"
        variant="outlined"
        color="error"
        onClick={(event) => deleteGlobally(event.target.name)}
      >
        Clear all types of todos
      </Button>
      <Button
        name="delete-except-inprogress"
        variant="outlined"
        color="success"
        onClick={(event) => deleteGlobally(event.target.name)}
      >
        Leave in-progress todos only
      </Button>
    </div>
  );
};

export default GlobalClearButtons;

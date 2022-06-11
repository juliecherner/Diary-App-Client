import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./edittodo.scss";

const EditTodo = ({
  getEditInput,
  handleSubmit,
  setEditInputToTodos,
  inputEditValue,
  editTodo,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          size="small"
          type="text"
          onChange={getEditInput}
          value={inputEditValue}
          placeholder="Edit your todo"
        />
        <Button onClick={setEditInputToTodos} size="large">
          <AddIcon />
          <div>Edit</div>
        </Button>
      </form>
    </div>
  );
};

export default EditTodo;

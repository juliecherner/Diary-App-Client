import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAdvice } from "../../../../store/actions/advice.action";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const NewAdvice = () => {
  const [newAdvice, setAdvice] = useState("");

  const dispatch = useDispatch();

  const addNewAdvice = async (newAdvice) => {
    if (newAdvice.length > 0) {
      dispatch(addAdvice({ text: newAdvice }));
      setAdvice("");
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
          onChange={(event) => setAdvice(event.target.value)}
          value={newAdvice}
        />
        <Button onClick={() => addNewAdvice(newAdvice)} size="large">
          <AddIcon />
          <div>Add</div>
        </Button>
      </form>
    </div>
  );
};

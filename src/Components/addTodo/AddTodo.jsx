import react, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddTodo = ({ getInput, handleSubmit, setInputToTodos, inputValue }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          size="small"
          type="text"
          placeholder="Add your todo"
          onChange={getInput}
          value={inputValue}
        />
        <Button onClick={setInputToTodos} size="large">
          <AddIcon />
          <div>Add</div>
        </Button>
      </form>
    </div>
  );
};

export default AddTodo;

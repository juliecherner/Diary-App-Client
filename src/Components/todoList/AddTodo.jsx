import react, { useState, useEffect } from "react";

const AddTodo = ({ getInput, handleSubmit, setInputToTodos, inputValue }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add your todo"
          onChange={getInput}
          value={inputValue}
          required
        />
        <button onClick={setInputToTodos}>Add</button>
      </form>
    </div>
  );
};

export default AddTodo;

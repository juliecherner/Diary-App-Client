import react, { useState, useEffect } from "react";

const AddTodo = ({ getInput, handleSubmit, setInputToTodos, inputValue }) => {
  // const [importance, setImportance] = useState("");
  // const [urgency, setUrgency] = useState("");
  //const [total, setTotal] = useState([]);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };

  // const getInput = (event) => {
  //   setInput(event.target.value);
  // };

  // const getImportance = (event) => {
  //   setImportance(event.target.value);
  // };

  // const getUrgency = (event) => {
  //   setUrgency(event.target.value);
  // };

  // const toggleStatus = () => {
  // setTotal([input, importance, urgency]);
  // setInput("");
  // setImportance("");
  // setUrgency("");
  // };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add your todo"
          onChange={getInput}
          value={todo}
          required
        />

        {/* <select onChange={getImportance} value={importance} required>
          <option>Importance</option>
          <option value="Very">Very</option>
          <option value="Average">Average</option>
          <option value="Low">Low</option>
        </select>

        <select onChange={getUrgency} value={urgency} required>
          <option>Urgency</option>
          <option value="Very">Very</option>
          <option value="Average">Average</option>
          <option value="Low">Low</option>
        </select>
        <button onClick={toggleStatus}>Add</button> */}
        <button onClick={setInputToTodos}>Add</button>
      </form>

      {/* <div>{total}</div> */}
    </div>
  );
};

export default AddTodo;

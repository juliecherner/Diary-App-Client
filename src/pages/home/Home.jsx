import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import react, { useState } from "react";

const Home = () => {
  const [todos, setTodos] = useState(() => {
    const todoItems = localStorage.getItem("todos") || "[]";
    const todosArray = JSON.parse(todoItems);
    return todosArray;
  });

  return (
    <div>
      <div>Welcome back!</div>
      <div>You have {todos.length} todos in progress</div>
      <Link to="/diary">See the diary</Link>
    </div>
  );
};

export default Home;

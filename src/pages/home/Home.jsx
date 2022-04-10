import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import react, { useState } from "react";
import "./home.scss";

const Home = () => {
  const [todos, setTodos] = useState(() => {
    const todoItems = localStorage.getItem("todos") || "[]";
    const todosArray = JSON.parse(todoItems);
    return todosArray;
  });

  return (
    <div className="homepage">
      <div className="homepage-titles">
        <div className="homepage-title1"> Track your plans </div>
        <div className="homepage-title2">and get things done </div>
      </div>
      <div>
        <div className="home--welcome">Welcome back!</div>
        {todos.length === 1 ? (
          <div className="home--progress">
            You have <span>{todos.length} todo</span> in progress
          </div>
        ) : (
          <div className="home--progress">
            You have <span>{todos.length} todos</span> in progress
          </div>
        )}

        <div className="home--link">
          <Link to="/diary">Check the diary</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import Time from "../../Components/time/Time";
import TodoList from "../../Components/todoList/TodoList";
import "./diary.css";

const Diary = () => {
  return (
    <div className="diary">
      <Time />
      <TodoList />
      <nav>
        <Link to="/">Return home</Link>
        <Link to="/analytics">Analyze my data</Link>
      </nav>
    </div>
  );
};

export default Diary;

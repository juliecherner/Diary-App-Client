import react from "react";
import { Link } from "react-router-dom";
import Time from "../../Components/time/Time.jsx";
import TodoList from "../../Components/todoList/TodoList.jsx";

const Diary = ({ checkResults }) => {
  return (
    <div>
      <Time />
      <div>i'm a diary</div>
      <TodoList />
      <nav>
        <Link to="/">Return home</Link>
        <Link to="/analytics">Analyze my data</Link>
      </nav>
    </div>
  );
};

export default Diary;

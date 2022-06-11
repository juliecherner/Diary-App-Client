import React from "react";
import { Link } from "react-router-dom";
import Time from "./components/time/Time";
import TodoList from "./components/todoList/TodoList";
import GlobalClearButtons from "./components/globalClearButtons/GlobalClearButtons";
import AddTodo from "./components/addTodo/AddTodo";
import "./diary.scss";

const diaryConstants = [
  { title: "Return home", link: "/" },
  { title: "Analyze my data", link: "/analytics" },
];

const Diary = () => {
  return (
    <div className="diary">
      <Time />
      <AddTodo />
      <TodoList />
      <GlobalClearButtons />
      <nav className="diary--links">
        {diaryConstants.map((constant) => (
          <Link
            key={constant.title}
            className="diary--linkitem"
            to={constant.link}
          >
            {constant.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Diary;

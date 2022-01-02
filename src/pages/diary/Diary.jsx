import react from "react";
import Time from "../../Components/time/Time.jsx";
import TodoList from "../../Components/todoList/TodoList.jsx";

const Diary = () => {
  return (
    <div>
      <Time />
      <div>i'm a diary</div>
      <TodoList />
    </div>
  );
};

export default Diary;

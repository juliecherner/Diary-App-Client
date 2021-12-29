import react from "react";
import Time from "../../Components/time/Time.jsx";
import AddTodo from "../../Components/addTodo/addTodo.jsx";
import TodoList from "../../Components/todoList/TodoList.jsx";
import DoneArea from "../../Components/doneArea/DoneArea.jsx";
import PostponedArea from "../../Components/postponedArea/PostponedArea.jsx";

const Diary = () => {
  return (
    <div>
      <Time />
      <div>i'm a diary</div>
      <AddTodo />
      <TodoList />
      <DoneArea />
      <PostponedArea />
    </div>
  );
};

export default Diary;

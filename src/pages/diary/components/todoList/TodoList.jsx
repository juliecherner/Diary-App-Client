import { React } from "react";
import { useSelector } from "react-redux";
import Advice from "../advice/Advice";
import AddTodo from "../addTodo/AddTodo";
import EditTodo from "../editTodo/EditTodo";
import Todo from "../todo/Todo";
import TodoArea from "../todoArea/TodoArea";
import "./todoList.scss";

const TodoList = () => {
  const todos = useSelector((state) => state.todosState);

  const filteredTodos = (listName) => {
    const copiedTodos = todos.slice();
    return copiedTodos.filter((todo) => todo.list === listName);
  };

  return (
    <div>
      {filteredTodos("inProgress").map((todo) => (
        <Todo key={todo._id} object={todo} />
      ))}
      <Advice />
      <div className="diary-areas-container">
        {filteredTodos("done").map((todo) => (
          <TodoArea name="Done" key={todo._id} text={todo.text} color="green" />
        ))}
        {filteredTodos("postponed").map((todo) => (
          <TodoArea
            name="Postponed"
            key={todo._id}
            text={todo.text}
            color="yellow"
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;

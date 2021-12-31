import react, { useEffect, useState } from "react";
import Todo from "../todo/Todo";
import { getOne } from "../../api/api";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const getAdvisedTodo = async () => {
    const random = Math.floor(Math.random() * 25);
    const data = await getOne("todos", random);
    setTodos([...todos, data]);
  };

  useEffect(() => {
    getAdvisedTodo();
  }, []);

  const displayAdvisedTodo = () => {
    return todos.map((todo) => {
      return (
        <Todo
          data={todo}
          key={todo.id}
          status="Advised"
          buttonsText={["Done", "Postpone", "Delete"]}
        />
      );
    });
  };

  return (
    <div>
      <div>I'm a todo list</div>
      <div>{displayAdvisedTodo()}</div>
    </div>
  );
};

export default TodoList;

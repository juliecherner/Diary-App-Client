import react, { useEffect, useState } from "react";
import Todo from "../todo/Todo";
import AdvisedTodo from "../advisedTodo/AdvisedTodo";
import { insertOne, getOne, getAll } from "../../api/api";
const TodoList = () => {
  const [todos, setTodos] = useState({});

  const getAdvisedTodo = async () => {
    const data = await getAll("todos");

    setTodos(data);
  };

  useEffect(() => {
    getOne("todos", 0);
    getAdvisedTodo();
  }, []);

  const items = [];
  for (const key in todos) {
    items.push(<Todo title={todos[key].todo} key={todos[key].id} />);
  }
  return (
    <div>
      I'm a todo list
      {items}
    </div>
  );
};

export default TodoList;

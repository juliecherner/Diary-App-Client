import react, { useEffect, useState } from "react";
import axios from "axios";
import Todo from "../todo/Todo";
import AdvisedTodo from "../advisedTodo/AdvisedTodo";

const TodoList = () => {
  let [currentAdvisedTodo, setCurrentAdvisedTodo] = useState("");
  const getAdvisedTodo = async () => {
    try {
      let randomId = "id" + Math.ceil(Math.random() * 25).toString();

      let response = await axios.get(
        "http://localhost:3006/advisedTodo/" + randomId
      );
      console.log(response.data);
      setCurrentAdvisedTodo(response.data.todo);
    } catch (error) {
      throw new Error("You have an error", error);
    }
  };

  useEffect(() => {
    getAdvisedTodo();
  }, []);

  return (
    <div>
      I'm a todo list
      <Todo />
      <AdvisedTodo />
      {currentAdvisedTodo}
    </div>
  );
};

export default TodoList;

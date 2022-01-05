import { React, useEffect, useState } from "react";
import Advice from "../advice/Advice";
import AddTodo from "../addTodo/AddTodo";
import EditTodo from "../editTodo/EditTodo";
import Todo from "../todo/Todo";
import { getOne } from "../../api/api";
import Area from "../area/Area";
import Button from "@mui/material/Button";
import "./todoList.css";

const TodoList = () => {
  const [advice, setAdvice] = useState([]);

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos") || "[]";
    if (savedTodos) {
      const todosArray = JSON.parse(savedTodos);
      return todosArray;
    } else {
      return [];
    }
  });

  const [done, setDone] = useState(() => {
    const savedDone = localStorage.getItem("done") || "[]";

    const todosArray = JSON.parse(savedDone);
    return todosArray;
  });

  const [postponed, setPostponed] = useState(() => {
    const savedPostponed = localStorage.getItem("postponed") || "[]";
    const todosArray = JSON.parse(savedPostponed);
    return todosArray;
  });

  const [deleted, setDeleted] = useState(() => {
    const deletedPostponed = localStorage.getItem("deleted") || "[]";
    const todosArray = JSON.parse(deletedPostponed);
    return todosArray;
  });

  const [currentTodo, setCurrentTodo] = useState("");
  const [adviceButtons, setAdviceButtons] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState("");
  const [indexEdit, setIndexEdit] = useState(0);

  const getAdvisedTodo = async () => {
    const random = Math.floor(Math.random() * 25);
    const data = await getOne("todos", random);
    setAdvice(data);
  };

  const deleteAdvice = () => {
    setAdviceButtons(!adviceButtons);
  };

  const setAdviceToList = () => {
    setTodos([...todos, advice.todo]);
    setAdviceButtons(!adviceButtons);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const getInput = (event) => {
    setCurrentTodo(event.target.value);
  };

  const setInputToTodos = (event) => {
    if (currentTodo) {
      setTodos([...todos, currentTodo]);
    }
    setCurrentTodo("");
  };

  const getCurrentTime = () => {
    const date = new Date().toDateString();
    return date;
  };

  const deleteTodo = (text) => {
    const filteredArray = todos.filter((todo) => todo !== text);
    setTodos(filteredArray);
    const item = todos.filter((todo) => todo === text);
    setDeleted([...deleted, ...item]);
  };

  const editTodo = (event) => {
    setEditMode(!editMode);
    const index = todos.findIndex((todo) => todo === event);
    setIndexEdit(index);

    const copiedArray = todos.slice();
    if (editedTodo.length > 0) {
      copiedArray[indexEdit] = editedTodo;
    }
    setTodos(copiedArray);
    setEditMode(!editMode);
    setEditedTodo("");
  };

  const getEditInput = (event) => {
    setEditedTodo(event.target.value);
  };

  const setEditInputToTodos = () => {
    const copiedArray = todos.slice();
    if (editedTodo.length > 0) {
      copiedArray[indexEdit] = editedTodo;
    }
    setTodos(copiedArray);
    setEditMode(!editMode);
    setEditedTodo("");
  };

  const moveToDone = (text) => {
    const filteredArray = todos.filter((todo) => todo !== text);
    setTodos(filteredArray);
    const item = todos.filter((todo) => todo === text);
    setDone([...done, ...item]);
  };

  const moveToPostponed = (text) => {
    const filteredArray = todos.filter((todo) => todo !== text);
    setTodos(filteredArray);
    const item = todos.filter((todo) => todo === text);
    setPostponed([...postponed, ...item]);
  };

  const displayTodos = () => {
    return todos.map((todo, index) => {
      return (
        <Todo
          key={todo + index}
          text={todo}
          date={getCurrentTime()}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          moveToDone={moveToDone}
          moveToPostponed={moveToPostponed}
        />
      );
    });
  };

  const displayDone = () => {
    return done.map((doneTodo, index) => {
      return (
        <Area
          name="Done"
          key={doneTodo + index}
          text={doneTodo}
          color="green"
        />
      );
    });
  };

  const displayPostponed = () => {
    return postponed.map((postponedTodo, index) => {
      return (
        <Area
          name="Postponed"
          key={postponedTodo + index}
          text={postponedTodo}
          color="yellow"
        />
      );
    });
  };

  const clearAllData = () => {
    setTodos([]);
    setDone([]);
    setPostponed([]);
    setDeleted([]);
  };

  const clearMarkedData = () => {
    setDone([]);
    setDeleted([]);
    setPostponed([]);
  };

  useEffect(() => {
    getAdvisedTodo();
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("done", JSON.stringify(done));
  }, [done]);

  useEffect(() => {
    localStorage.setItem("postponed", JSON.stringify(postponed));
  }, [postponed]);

  useEffect(() => {
    localStorage.setItem("deleted", JSON.stringify(deleted));
  }, [deleted]);

  return (
    <div>
      {editMode ? (
        <EditTodo
          getEditInput={getEditInput}
          handleSubmit={handleSubmit}
          setEditInputToTodos={setEditInputToTodos}
          inputEditValue={editedTodo}
          editTodo={editTodo}
        />
      ) : (
        <AddTodo
          inputValue={currentTodo}
          getInput={getInput}
          handleSubmit={handleSubmit}
          setInputToTodos={setInputToTodos}
        />
      )}

      {displayTodos()}
      <Advice
        object={advice}
        deleteAdvice={deleteAdvice}
        visibility={adviceButtons}
        setAdviceToList={setAdviceToList}
      />
      <div className="areas-container">
        <div>{displayDone()}</div>
        <div> {displayPostponed()}</div>
      </div>
      <div className="todolist--clearbuttons">
        <Button variant="outlined" color="error" onClick={clearAllData}>
          Clear all data
        </Button>
        <Button variant="outlined" color="success" onClick={clearMarkedData}>
          Leave todos only
        </Button>
      </div>
    </div>
  );
};

export default TodoList;

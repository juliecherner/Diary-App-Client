import react, { useEffect, useState, useRef } from "react";
import Advice from "../advice/Advice";
import AddTodo from "../addTodo/AddTodo";
import Todo from "../todo/Todo";
import { getOne } from "../../api/api";
import Area from "../../Components/area/Area.jsx";
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

  const editTodo = (text) => {
    setEditMode(!editMode);
    const item = todos.filter((todo) => todo === text);
    console.log("item", item);
  };

  // edit stuff
  // const saveChanges = (text) => {
  //   setEditMode(!editMode);
  //   console.log(editedValue);
  // };

  const displayTodos = () => {
    return todos.map((todo, index) => {
      return (
        <Todo
          key={index}
          text={todo}
          date={getCurrentTime()}
          deleteTodo={deleteTodo}
          moveToDone={moveToDone}
          moveToPostponed={moveToPostponed}
          editTodo={editTodo}
        />
        // {/* {editMode && (
        //   <div>
        //     <input
        //       placeholder="Edit the task"
        //       ref={editedValue}
        //       value={editedValue}
        //     />
        //     <button onClick={saveChanges}>Save</button>
        //   </div>
        // )} */}
      );
    });
  };

  const displayDone = () => {
    return done.map((doneTodo) => {
      return <Area name="Done" key={doneTodo} text={doneTodo} color="green" />;
    });
  };

  const displayPostponed = () => {
    return postponed.map((postponedTodo) => {
      return (
        <Area
          name="Postponed"
          key={postponedTodo}
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
      <div>I'm a todo list</div>
      <AddTodo
        inputValue={currentTodo}
        getInput={getInput}
        handleSubmit={handleSubmit}
        setInputToTodos={setInputToTodos}
      />
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
      <button onClick={clearAllData}>Clear all data</button>
      <button onClick={clearMarkedData}>Clear all except current todos</button>
    </div>
  );
};

export default TodoList;

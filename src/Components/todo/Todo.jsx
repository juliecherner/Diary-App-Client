import "./todo.css";

const Todo = ({ text, date, deleteTodo, moveToDone, moveToPostponed }) => {
  return (
    <div className="todo">
      <div className="todo-container">
        <div>{text}</div>
        <div>Created {date}</div>
      </div>
      <div className="todo-buttons">
        <button onClick={() => deleteTodo(text)}>Delete</button>
        <button onClick={() => moveToDone(text)}>Done</button>
        <button onClick={() => moveToPostponed(text)}>Postponed</button>
      </div>
    </div>
  );
};

export default Todo;

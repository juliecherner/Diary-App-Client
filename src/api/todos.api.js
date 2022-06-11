import api from "./api";

export const getAllTodos = async () => {
  try {
    const all = await api.get("/todos");
    return all;
  } catch (error) {
    console.log(error.response);
  }
};

export const addTodo = async (todo) => {
  try {
    const newTodo = await api.post("/todos", { text: todo.text });
    console.log("created todo api", newTodo);
    return newTodo;
  } catch (error) {
    console.log(error.response);
    // alert("not added");
  }
};

export const changeTextById = async (id, newValue) => {
  try {
    const updatedTodo = await api.patch("/todos", {
      id: id,
      field: "text",
      newValue: newValue,
    });
    return updatedTodo;
  } catch (error) {
    console.log(error.response);
  }
};

export const moveToDone = async (id) => {
  try {
    const doneTodo = await api.patch("/todos", {
      id: id,
      field: "list",
      newValue: "done",
    });
    return doneTodo;
  } catch (error) {
    console.log(error.response);
  }
};

export const moveToPostponed = async (id) => {
  try {
    const postponedTodo = await api.patch("/todos", {
      id: id,
      field: "list",
      newValue: "postponed",
    });
    return postponedTodo;
  } catch (error) {
    console.log(error.response);
  }
};

export const moveToDeleted = async (id) => {
  try {
    const todo = await api.patch("/todos", {
      id: id,
      field: "list",
      newValue: "deleted",
    });
    return todo;
  } catch (error) {
    console.log(error.response);
  }
};

export const deleteAll = async () => {
  try {
    const result = await api.delete("/todos");
    return result;
  } catch (error) {
    console.log(error.response);
  }
};

export const deleteAllExceptInProgress = async () => {
  try {
    const result = await api.delete("/todos/except-in-progress");
    return result;
  } catch (error) {
    console.log(error.response);
  }
};

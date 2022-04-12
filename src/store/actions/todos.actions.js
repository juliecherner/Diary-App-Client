import { todosConstants } from "../constants";

export const getAllTodos = (todos) => {
  return {
    type: todosConstants.GET_ALL,
    payload: todos,
  };
};

export const addTodo = (todo) => {
  return {
    type: todosConstants.ADD_ONE,
    payload: todo,
  };
};

export const editTodo = (todo) => {
  return {
    type: todosConstants.EDIT_ONE,
    payload: todo,
  };
};

export const deleteTodo = (id) => {
  return {
    type: todosConstants.DELETE_ONE,
    payload: id,
  };
};

export const doneTodo = (id) => {
  return {
    type: todosConstants.DONE_ONE,
    payload: id,
  };
};

export const postponeTodo = (id) => {
  return {
    type: todosConstants.POSTPONE_ONE,
    payload: id,
  };
};

export const deleteAllTodos = () => {
  return { type: todosConstants.DELETE_ALL };
};

export const deleteTodosNotInProgress = () => {
  return { type: todosConstants.DELETE_ALL_NOT_IN_PROGRESS };
};

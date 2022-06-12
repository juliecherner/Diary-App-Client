import { todosConstants } from "../constants";
import * as todoAPI from "../../api/todos.api";

export const getAllTodos = () => async (dispatch) => {
  const { data } = await todoAPI.getAllTodos();
  if (!data) return;
  dispatch({ type: todosConstants.GET_ALL, payload: data });
};

export const addTodo = (todo) => async (dispatch) => {
  const data = await todoAPI.addTodo(todo);
  if (!data) {
    alert("not added");
  } else {
    dispatch({ type: todosConstants.ADD_ONE, payload: data.data });
  }
};

export const editTodoText = (id, newValue) => async (dispatch) => {
  const { data } = await todoAPI.changeTextById(id, newValue);
  console.log(data);
  if (!data) return;
  dispatch({ type: todosConstants.EDIT_ONE, payload: data });
};

export const deleteTodo = (id) => async (dispatch) => {
  const { data } = await todoAPI.moveToDeleted(id);
  if (!data) return;
  console.log("deleted todo", data._id);
  dispatch({ type: todosConstants.DELETE_ONE, payload: data._id });
};

export const doneTodo = (id) => async (dispatch) => {
  console.log("id", id);
  const { data } = await todoAPI.moveToDone(id);
  if (!data) alert("not added!");
  dispatch({ type: todosConstants.DONE_ONE, payload: data._id });
};

export const postponeTodo = (id) => async (dispatch) => {
  const { data } = await todoAPI.moveToPostponed(id);
  if (!data) return;
  dispatch({ type: todosConstants.POSTPONE_ONE, payload: data._id });
};

export const deleteAllTodos = () => async (dispatch) => {
  const { data } = await todoAPI.deleteAll();
  if (!data) return;
  dispatch({ type: todosConstants.DELETE_ALL });
};

export const deleteTodosNotInProgress = () => async (dispatch) => {
  const { data } = await todoAPI.deleteAllExceptInProgress();
  if (!data) return;
  dispatch({ type: todosConstants.DELETE_ALL_NOT_IN_PROGRESS });
};

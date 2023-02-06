import { todosConstants } from "../constants";
import * as todoAPI from "../../api/todos.api";

export const getAllTodos = () => async (dispatch) => {
  try {
    const { data } = await todoAPI.getAllTodos();
    if (!data) return;
    dispatch({ type: todosConstants.GET_ALL, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const addTodo = (todo) => async (dispatch) => {
  try {
    const data = await todoAPI.addTodo(todo);
    if (!data) {
      alert("not added");
    } else {
      dispatch({ type: todosConstants.ADD_ONE, payload: data.data });
    }
  } catch (error) {
    console.error(error);
  }
};

export const editTodoText = (id, newValue) => async (dispatch) => {
  const { data } = await todoAPI.changeTextById(id, newValue);
  console.log(data);
  if (!data) return;
  dispatch({ type: todosConstants.EDIT_ONE, payload: data });
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    const { data } = await todoAPI.moveToDeleted(id);
    if (!data) return;
    dispatch({ type: todosConstants.DELETE_ONE, payload: data._id });
  } catch (error) {
    console.error(error);
  }
};

export const doneTodo = (id) => async (dispatch) => {
  try {
    const { data } = await todoAPI.moveToDone(id);
    if (!data) alert("not added!");
    dispatch({ type: todosConstants.DONE_ONE, payload: data._id });
  } catch (error) {
    console.error(error);
  }
};

export const postponeTodo = (id) => async (dispatch) => {
  try {
    const { data } = await todoAPI.moveToPostponed(id);
    if (!data) return;
    dispatch({ type: todosConstants.POSTPONE_ONE, payload: data._id });
  } catch (error) {
    console.error(error);
  }
};

export const deleteAllTodos = () => async (dispatch) => {
  try {
    const { data } = await todoAPI.deleteAll();
    if (!data) return;
    dispatch({ type: todosConstants.DELETE_ALL });
  } catch (error) {
    console.error(error);
  }
};

export const deleteTodosNotInProgress = () => async (dispatch) => {
  try {
    const { data } = await todoAPI.deleteAllExceptInProgress();
    if (!data) return;
    dispatch({ type: todosConstants.DELETE_ALL_NOT_IN_PROGRESS });
  } catch (error) {
    console.error(error);
  }
};

import { todosConstants } from "../constants";

const initialState = [];
//filter by progress on front

const object = {
  id: "",
  text: "",
  progress: "",
  date: "date",
};

export const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case todosConstants.GET_ALL:
      //payload [] of all objects
      return payload;
    case todosConstants.ADD_ONE:
      //payload - object with all fields
      return [...state, payload];
    case todosConstants.EDIT_ONE:
      //payload (object with id + text)
      return changeTextById(state, payload.id, payload.text);
    case todosConstants.DELETE_ONE:
      //payload  - id
      return changeProgressById(state, payload, "deleted");
    case todosConstants.DONE_ONE:
      //payload  - id
      return changeProgressById(state, payload, "done");
    case todosConstants.POSTPONE_ONE:
      //payload  - id
      return changeProgressById(state, payload, "postponed");
    case todosConstants.DELETE_ALL:
      return [];
    case todosConstants.DELETE_ALL_NOT_IN_PROGRESS:
      const stateCopy = state.slice();
      stateCopy.filter((todo) => todo.progress === "inProgress");
      return stateCopy;
    default:
      return state;
  }
};

const changeProgressById = (state, id, progress) => {
  const stateCopy = state.slice();
  const indexForProgressUpdate = state.indexstateCopy.findIndex(
    (todo) => todo.id === id
  );
  stateCopy[indexForProgressUpdate].progress = progress;
  return stateCopy;
};

const changeTextById = (state, id, text) => {
  const stateCopy = state.slice();
  const indexForProgressUpdate = state.indexstateCopy.findIndex(
    (todo) => todo.id === id
  );
  stateCopy[indexForProgressUpdate].text = text;
  return stateCopy;
};

const changeFieldValueById = (state, id, field, fieldValue) => {
  const stateCopy = state.slice();
  const indexForProgressUpdate = state.indexstateCopy.findIndex(
    (todo) => todo.id === id
  );
  stateCopy[indexForProgressUpdate][field] = fieldValue;
  return stateCopy;
};

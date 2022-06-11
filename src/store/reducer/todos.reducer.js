import { todosConstants } from "../constants";

const initialState = [];

export const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case todosConstants.GET_ALL: {
      return payload;
    }
    case todosConstants.ADD_ONE: {
      return [...state, payload];
    }
    case todosConstants.EDIT_ONE: {
      return changeFieldById(state, payload._id, "text", payload.text);
    }
    case todosConstants.DELETE_ONE: {
      return changeFieldById(state, payload, "list", "deleted");
    }
    case todosConstants.DONE_ONE: {
      return changeFieldById(state, payload, "list", "done");
    }
    case todosConstants.POSTPONE_ONE: {
      return changeFieldById(state, payload, "list", "postponed");
    }
    case todosConstants.DELETE_ALL: {
      return [];
    }
    case todosConstants.DELETE_ALL_NOT_IN_PROGRESS: {
      const stateCopy = state.slice();
      return stateCopy.filter((todo) => todo.list === "inProgress");
    }
    default: {
      return state;
    }
  }
};

const changeFieldById = (state, id, field, newValue) => {
  const stateCopy = state.slice();
  const index = stateCopy.findIndex((todo) => todo._id === id);
  stateCopy[index][field] = newValue;
  return stateCopy;
};

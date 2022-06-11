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
      return changeFieldById(state, payload, "text", payload.text);
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
      stateCopy.filter((todo) => todo.list === "inProgress");
      return stateCopy;
    }
    default: {
      return state;
    }
  }
};

const changeFieldById = (state, id, field, newValue) => {
  console.log("id", id);
  const stateCopy = state.slice();
  const index = stateCopy.findIndex((todo) => todo._id === id);
  console.log("index", index);
  stateCopy[index][field] = newValue;
  return stateCopy;
};

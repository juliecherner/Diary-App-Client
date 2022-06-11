import { adviceConstants } from "../constants";

const initialState = [];

export const adviceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case adviceConstants.GET_ALL_ADVICE:
      return payload;
    case adviceConstants.ADD_ADVICE:
      return [...state, payload];
    case adviceConstants.DELETE_ADVICE:
      const copiedState = [...state];
      return copiedState.filter((todo) => todo._id !== payload);
    default:
      return state;
  }
};

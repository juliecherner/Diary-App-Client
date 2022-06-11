import { currentAdviceConstants } from "../constants";

const initialState = {};

export const currentAdviceReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case currentAdviceConstants.GET_CURRENT_ADVICE:
      return payload;
    default:
      return state;
  }
};

import { adviceConstants } from "../constants";

const initialState = {};
//filter by progress on front

const object = {
  id: "",
  text: "",
  progress: "",
  date: "date",
};

export const adviceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case adviceConstants.GET_ONE:
      //payload {}
      return payload;
    case adviceConstants.DELETE_ONE:
      return {};
    default:
      return state;
  }
};

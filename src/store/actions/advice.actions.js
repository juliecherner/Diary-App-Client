import { adviceConstants } from "../constants";

export const getAdvice = () => {
  return { type: adviceConstants.GET_ONE };
};

export const deleteAdvice = () => {
  return { type: adviceConstants.DELETE_ONE };
};

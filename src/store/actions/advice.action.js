import { adviceConstants } from "../constants";
import * as adviceAPI from "../../api/advice.api";

export const getAdvice = () => async (dispatch) => {
  const { data } = await adviceAPI.getAllAdvice();
  dispatch({ type: adviceConstants.GET_ALL_ADVICE, payload: data });
};

export const addAdvice = (advice) => async (dispatch) => {
  const { data } = await adviceAPI.addAdvice(advice);
  dispatch({ type: adviceConstants.ADD_ADVICE, payload: data });
};

export const deleteAdvice = (id) => async (dispatch) => {
  console.log("action id", id);
  const { data } = await adviceAPI.deleteAdvice(id);
  dispatch({ type: adviceConstants.DELETE_ADVICE, payload: data._id });
};

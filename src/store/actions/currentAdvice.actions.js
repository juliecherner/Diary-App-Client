import { currentAdviceConstants } from "../constants";
import * as adviceAPI from "../../api/advice.api";

export const getAdvice = () => async (dispatch) => {
  try {
    const { data } = await adviceAPI.getRandomAdvice();
    dispatch({
      type: currentAdviceConstants.GET_CURRENT_ADVICE,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};

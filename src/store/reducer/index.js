import { combineReducers } from "redux";
import { currentAdviceReducer } from "./currentAdvice.reducer";
import { todosReducer } from "./todos.reducer";
import { adviceReducer } from "./advice.reducer";

export const rootReducer = combineReducers({
  todosState: todosReducer,
  currentAdviceState: currentAdviceReducer,
  adviceState: adviceReducer,
});

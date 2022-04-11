import { combineReducers } from "redux";
import { adviceReducer } from "./advice.reducer";
import { todosReducer } from "./todos.reducer";

export const rootReducer = combineReducers({
  todosState: todosReducer,
  adviceState: adviceReducer,
});

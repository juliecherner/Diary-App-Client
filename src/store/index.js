import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { rootReducer } from "./reducer";

const logger = createLogger({ logErrors: true });

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const middleware = [thunk];

export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

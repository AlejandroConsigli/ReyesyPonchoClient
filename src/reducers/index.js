import { combineReducers } from "redux";
import auth from "./auth";
import user from "./user";
import confirmations from "./confirmations";
import alerts from "./alerts";

const rootReducer = combineReducers({
    auth,
    user,
    confirmations,
    alerts,
});

export default rootReducer;

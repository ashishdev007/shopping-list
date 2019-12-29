import { combineReducers } from "redux";
import itemsReducer from "./ItemsReducer";
import authReducer from "./AuthReducer";
import errorReducer from "./ErrorsReducer";

export default combineReducers({
    items: itemsReducer,
    auth: authReducer,
    error: errorReducer
});

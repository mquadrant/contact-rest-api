import { combineReducers } from "redux";
import { contactReducer, contactListReducer } from "../reducers/contactReducer";

const rootReducer = combineReducers({
    contact: contactReducer,
    contactSelect: contactListReducer,
});

export default rootReducer;

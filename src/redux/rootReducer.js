import { combineReducers } from "redux";
import { counterReducers } from "./test/reducers";
import { userReducer } from "./user/reducers.";

const rootReducer = combineReducers({
    counter: counterReducers,
    user: userReducer,
})

export default rootReducer
import { combineReducers } from "redux";
import { counterReducers } from "./test/reducers";
import { todoReducer } from "./todo/reducers.";
import { userReducer } from "./user/reducers.";

const rootReducer = combineReducers({
    counter: counterReducers,
    user: userReducer,
    todo: todoReducer,
})

export default rootReducer
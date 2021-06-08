import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const initState = {}

const store = createStore(
    rootReducer,
    initState,
    composeWithDevTools(applyMiddleware(thunk))
)
 
export default store;
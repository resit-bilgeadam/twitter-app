import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth";
import twitReducer from "./twit";

const rootReducer = combineReducers({
    auth: authReducer,
    twit: twitReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
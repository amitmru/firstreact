import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk";
import { rootReducer } from ".";

export const configureStore = () => {
    let store = createStore(rootReducer, applyMiddleware(thunk));

    return store;
}
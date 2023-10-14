import { combineReducers } from "redux";
import { CounterReducer } from "./reducer/counter.reducer";



export const rootReducer = combineReducers({
    counter: CounterReducer
})
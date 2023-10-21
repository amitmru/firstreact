import { combineReducers } from "redux";
import { CounterReducer } from "./reducer/counter.reducer";
import { cartRedurcer } from "./reducer/cart.redurce";



export const rootReducer = combineReducers({
    counter: CounterReducer,
    cart: cartRedurcer
})
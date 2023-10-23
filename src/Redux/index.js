import { combineReducers } from "redux";
import { CounterReducer } from "./reducer/counter.reducer";
import { cartRedurcer } from "./reducer/cart.redurce";
import { dataReducer } from "./reducer/data.reduece";



export const rootReducer = combineReducers({
    counter: CounterReducer,
    cart: cartRedurcer,
    data: dataReducer
})
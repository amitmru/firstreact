import { ADD_CART } from "../actionType";

const initialState = {
    isLoading: false,
    cart: [],
    error: null
}

export const cartRedurcer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case ADD_CART:
          return {
            ...state,
            cart: action.payload
          }
    
        default:
            return state
    }
}
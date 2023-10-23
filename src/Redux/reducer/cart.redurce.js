import { ADD_CART, DEC_CART, INC_CART } from "../actionType";

const initialState = {
  isLoading: false,
  cart: [],
  error: null
}

export const cartRedurcer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case ADD_CART:

      let check = state.cart.some((v) => v.id === action.payload.id)

      console.log(check);

      let index = state.cart.findIndex((v) => v.id === action.payload.id)

      if (check) {
        state.cart[index].qty++
      } else {
        state.cart.push(action.payload);
      }

      return {
        isLoading: false,
        cart: state.cart,
        error: null
      }

    case INC_CART:
      let indexInc = state.cart.findIndex((v) => v.id === action.payload)

      state.cart[indexInc].qty++;

      return {
        isLoading: false,
        cart: state.cart,
        error: null
      }

      case DEC_CART:
        let indexDec = state.cart.findIndex((v) => v.id === action.payload)

            if (state.cart[indexDec].qty > 1) {
                state.cart[indexDec].qty--;
            }
        
            return {
                isLoading: false,
                cart: state.cart,
                error: null
            }
    default:
      return state
  }
}
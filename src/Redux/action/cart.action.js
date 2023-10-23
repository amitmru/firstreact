import { ADD_CART, DEC_CART, INC_CART } from "../actionType"

export const cartAdd = (id) => (dispatch) => {
    dispatch({
        type: ADD_CART,
        payload: {id, qty:1}
    })
}

export const incrementHadle = (id) => (dispatch) => {
    dispatch({
        type: INC_CART,
        payload: id
    })
}

export const decrementHadle = (id) => (dispatch) => {
    dispatch({
        type: DEC_CART,
        payload: id
    })
}
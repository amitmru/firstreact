import { ADD_CART } from "../actionType"

export const cartAdd = (id) => (dispatch) => {
    dispatch({
        type: ADD_CART,
        payload: id
    })
}
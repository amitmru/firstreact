import { GET_DATA } from "../actionType";

const initialState = {
    isLoading: false,
    data: [],
    error: null
}

export const dataReducer = (state = initialState, action) => {

    console.log(action);

    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}
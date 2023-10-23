import { API_URL } from "../../Utility/baseURL"
import { GET_DATA } from "../actionType"

export const getData = () => (dispatch) => {
    try {
        fetch(API_URL + 'Data')
        .then((res) => res.json())
        .then((data) => dispatch({
            type: GET_DATA,
            payload: data
        }))
    } catch (error) {
        console.log(error);
    }
}
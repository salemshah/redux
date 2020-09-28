import {SET_LOADING, GET_PRODUCTS} from "./Redux-Actions/Action"

const initialState = {
    name: "products"
}

export default function ProductReducer(state = initialState, action) {

    switch (action.type) {
        case SET_LOADING:
            return state
        case GET_PRODUCTS:
            return state
        default:
            return state
    }
}
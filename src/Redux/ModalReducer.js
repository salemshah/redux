import {MODAL_OPEN, MODAL_CLOSE} from "./Redux-Actions/Action"

const initialState = {
    show: false,
    name: "",
    text: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case MODAL_OPEN:
            return {...state, show: true, name: action.payload.name, text: action.payload.text}
        case MODAL_CLOSE:
            return {...state, show: false, name: "", text: ""}
        default:
            return state
    }
}
import {INCREASE, DECREASE, RESET} from "./Redux-Actions/Action"

const defaultValue = {
    count: 0,
    name: "Salem",
    message: false,
}

export default function reducer(state = defaultValue, action) {
    switch (action.type) {
        case INCREASE:
            return {...state, count: state.count + 1, message: false}
        case DECREASE:
            if (state.count === 0) {
                return {...state, count: 0, message: true}
            } else {
                return {...state, count: state.count - 1}
            }
        case RESET:
            return {...state, count: 0, message: false};
        default:
            return state
    }
}
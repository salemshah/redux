import {INCREASE, DECREASE, RESET} from "./Action"

const defaultValue = {
    count: 44,
    name: "salem"
}

export default function reducer(state = defaultValue, action) {
    switch (action.type) {
        case INCREASE:
            return {...state, count: state.count + 1}
        case DECREASE:
            return {...state, count: state.count - 1}
        case RESET:
            return {...state, count: 0};
        default:
            return state
    }
}
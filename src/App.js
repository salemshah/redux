import React from "react";
import Counter from "./Counter";
import {createStore} from "redux"

// setup reducer

const defaultValue = {
    count: 22,
    name: "salem"
}

function reducer(state, action) {
    console.log(state, action)
    if (action.type === "DECREASE") {
        state.count = state.count - 1;
        return state
    }
    return state;
}

const store = createStore(reducer, defaultValue);
store.dispatch({type: "DECREASE"})
store.dispatch({type: "DECREASE"})
store.dispatch({type: "DECREASE"})

//console.log(store.getState())
const App = () => {
    return <Counter state={store.getState()}/>;
};

export default App;

import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux"
import App from "./App";
import {createStore, combineReducers} from "redux"

import CounterReducer from "./Redux/CounterReducer";
import ProductReducer from "./Redux/ProductReducer";
import ModalReducer from "./Redux/ModalReducer";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(combineReducers({
    countState: CounterReducer,
    productState: ProductReducer,
    modalState: ModalReducer,
}), devTools);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById("root"));

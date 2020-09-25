import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux"
import App from "./App";
import {createStore} from "redux"

import reducer from "./Reducer";


const store = createStore(reducer);
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById("root"));

import React from "react";
import {connect} from "react-redux"
import {INCREASE, DECREASE, RESET, MODAL_OPEN} from "./Redux/Redux-Actions/Action"
import ModalComponent from "./ModalComponent";


function Counter(props) {
    //console.log("I'am props", props)
    const {count, name, increase, decrease, reset, message} = props;
    //const [counter, setCounter] = useState(0);
    return (
        <div className="container text-center">
            <h1>
                Counter
            </h1>
            <div>
                It comes from Redux: Name
                <div className="h2">
                    {name}
                </div>
            </div>
            <ModalComponent/>
            {message && <div className="alert alert-warning">The counter cannot shrink from zero!</div>}

            <div>It comes from Redux: count
                <div className="h2">{count}</div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="mx-2">
                    <button
                        className="btn btn-warning"
                        onClick={decrease}>
                        Decrease
                    </button>
                </div>
                <div className="mx-2">
                    <button
                        className="btn btn-danger"
                        onClick={reset}>
                        Reset
                    </button>
                </div>
                <div className="mx-2">
                    <button
                        className="btn btn-primary"
                        onClick={increase}>
                        Increase
                    </button>
                </div>

            </div>
        </div>);
}

const mapStateToProp = ({countState: {name, count, message}}) => {
    return {count: count, name: name, message: message}
}

const mapDispatchToProp = (dispatch) => {
    return {
        increase: () => dispatch({type: INCREASE}),
        decrease: () => dispatch({type: DECREASE}),
        reset: () => {
            dispatch({type: RESET})
            dispatch({
                type: MODAL_OPEN,
                payload: {
                    name: "Reset",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
                        "A adipisci assumenda cumque deserunt dignissimos doloribus " +
                        "dolorum earum eos fugiat hic inventore nostrum numquam perferendis " +
                        "quaerat quo, recusandae, reprehenderit totam veritatis!"
                }
            })
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(Counter);

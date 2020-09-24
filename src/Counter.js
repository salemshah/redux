import React, {useState} from "react";

function Counter(props) {
    const {count, name} = props.state
    const [counter, setCounter] = useState(0);
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
            <div>It comes from Redux: count
                <div className="h2">{count}</div>
            </div>
            <div>
                <p>{counter}</p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="mx-2">
                    <button className="btn btn-warning"
                            onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}>Decrease
                    </button>
                </div>
                <div className="mx-2">
                    <button className="btn btn-danger" onClick={() => setCounter(0)}>Reset</button>
                </div>
                <div className="mx-2">
                    <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>Increase</button>
                </div>
            </div>
        </div>);
}

export default Counter;

import React from "react";
import "./style.css";

const Counter = props => {
    return (
    <div className="card text-center">
        <div className="card-header">
            Your Score
        </div>
        <div className="card-body">
            <p>{props.score}</p>
            <br/>
            <p>{props.message}</p>
        </div>
    </div>
    );
}

export default Counter;
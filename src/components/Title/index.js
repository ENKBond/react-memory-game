import React from "react";
import "./style.css";

const Title = (props) => {
return (
    <div className="title-bar row">
        <div className="col-4">
            <img className="star" src="assets/star.png" alt="img not found"/>
        </div>
        <div className="col-8">
            <h1 className="title label">Travel Poster Click Game</h1>
        </div>
        <br></br>
        <h5 className="title">Click on an image to earn points, but don't click on any more than once!</h5>
    </div>
    );
}

export default Title;

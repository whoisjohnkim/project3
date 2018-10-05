import React from "react";
import "./GuideWrapper.css";

const GuideWrapper = props => (
    <div className="game">
        <h3>{props.title}</h3>
        <h5>Rating: {props.rating}</h5>
        <span className="buttonContainer">
            <button type="button" className="btn btn-success" onClick={props.upVote}>Up Vote</button>
            <button type="button" className="btn btn-danger" onClick={props.downVote}>Down Vote</button>
        </span>

        <ul className="instructions">
            {props.description.map( step => (
                <li>
                    {step}
                </li>
            ))}
        </ul>
    </div>
);

export default GuideWrapper;
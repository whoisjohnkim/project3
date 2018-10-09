import React from "react";
import "./GuideWrapper.css";
import picture from "../../images/beertattoo.jpg";
import picture2 from "../../images/bottlebp.jpg";
import picture3 from "../../images/cheers.jpg";
import picture4 from "../../images/bw.jpg";
var array = [picture, picture2, picture3, picture4];
var random = Math.floor(Math.random() * array.length);

const GuideWrapper = props => (
    <div className="game">
        <h3>{props.title}</h3>
        <h5>Rating: {props.rating}</h5>
        <span className="buttonContainer">
            <img className="headerPhoto" src={array[random]} alt="Party Games"/>
            <br/>
            <button type="button" className="btn btn-success" onClick={props.upVote}>Up Vote</button>
            <button type="button" className="btn btn-danger" onClick={props.downVote}>Down Vote</button>
        </span>
         <ul className="instructions">
            {props.description.map( (step, i) => (
                <li key={i}>
                    {step}
                </li>
            ))}
        </ul>
    </div>
);

export default GuideWrapper;
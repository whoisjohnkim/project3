import React from "react";
import "./GuideWrapper.css";
import picture from "../../images/beertattoo.jpg";
import picture2 from "../../images/bottlebp.jpg";
import picture3 from "../../images/gamesmaybe.jpg";
import picture4 from "../../images/bw.jpg";
import picture5 from "../../images/kclight.jpg"
var array = [picture, picture2, picture3, picture4, picture5];
var random = Math.floor(Math.random() * array.length);

const GuideWrapper = props => (
    <div className="game">
        <h3 id= "gamename">{props.title}</h3>
        <hr />
      
        <h5 id="rating">RATING: {props.rating}</h5>
        <span className="buttonContainer">
            <img className="headerPhoto" src={array[random]} alt="Party Games"/>
            <br/>
            <button type="button" className="btn btn-success" onClick={props.upVote}>Up Vote</button>
            <button type="button" className="btn btn-danger" onClick={props.downVote}>Down Vote</button>
        </span>
        <br/>
        <hr />
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
import React from "react";

const GuideWrapper = props => (
    <div>
        <h3>{props.title}</h3>
        <h5>Rating: {props.rating}</h5>
        <button type="button" onClick={props.upVote}>Up Vote</button>
        <button type="button" onClick={props.downVote}>Down Vote</button>
        <ul>
            {props.description.map( step => (
                <li>
                    {step}
                </li>
            ))}
        </ul>
    </div>
);

export default GuideWrapper;
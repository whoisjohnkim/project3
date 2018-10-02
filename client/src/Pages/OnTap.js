import React, {Component} from 'react';
import Home from './Home';
import "../components/OnTap/OnTap.css";
import OnTapLogo from "../images/OnTapLogo.svg";
import smolbeer from "../images/smolbeer.png";
import circle from "../images/circle.png";
import cheers from "../images/cheers.jpg";
import bright from "../images/bright.jpg";




class OnTap extends Component {
    render() {
        return (
            <div> 
                <div className="bg-img">
                <div className="loadingContent">
                {/* <img id= "logo" src={require('../images/OnTapLogo.svg')} /> */}
                <img id= "circle" src={require('../images/circle.png')} />
                <p id= "ontapword"> ON TAP </p>
                <br/>
                <p id= "beerbtn"> <a href="./Home">
                <img id= "smolbeer" src={require('../images/smolbeer.png')} /> </a></p>
                <br />
                <p id= "toplay">click to play!</p>
                </div>
                </div>
            </div>
        )
    }
}

export default OnTap;
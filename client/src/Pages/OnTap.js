import React, {Component} from 'react';
import "../components/OnTap/OnTap.css";
import logo from "../images/OnTapLogoUpdated.png";

class OnTap extends Component {
    render() {
        return (
            <div> 
                <div className="bg-img">
                    <div className="loadingContent container">
                        {/* <img id= "logo" src={require('../images/OnTapLogo.svg')} /> */}
                        <img id= "circle" src={require('../images/circle.png')} />
                        <div className="text-center same-stuff">
                         <a href="./Home">
                         <img id="MainLogo" src={ logo } alt="logo" />                           
                            <h4 id= "toplay"> click to play! </h4>
                         </a>
                                                    
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default OnTap;
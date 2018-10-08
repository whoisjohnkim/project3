import React, {Component} from 'react';
import "../components/OnTap/OnTap.css";
<<<<<<< HEAD
import logo from "../images/OnTapLogoUpdated.png";
=======
const landinglogo = require('../images/OnTapLogoUpdated.png');

>>>>>>> master

class OnTap extends Component {
    render() {
        return (
            <div> 
                <div className="bg-img">
                    <div className="loadingContent container">
                        {/* <img id= "logo" src={require('../images/OnTapLogo.svg')} /> */}
                        <img id= "circle" src={require('../images/circle.png')} />
                        <div className="text-center same-stuff">
<<<<<<< HEAD
                         
                         <img id="MainLogo" src={ logo } alt="logo" OnClick="/signup" />                           
                            <h4 id= "toplay"> click to play! </h4>
                         
                                                    
=======
                            {/* <h1 id= "ontapword"> ON TAP </h1>                             */}
                            <img id="landinglogo" src={ landinglogo } />
                            <br/>
                            <a href="./Home">
                                <img id= "smolbeer" src={require('../images/smolbeer.png')} />
                            </a>
                            <h4 id= "toplay"> click to play! </h4>                        
>>>>>>> master
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default OnTap;
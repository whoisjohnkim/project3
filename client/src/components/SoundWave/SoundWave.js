import React, { Component } from "react";
import "./SoundWave.css";

class SoundWave extends Component {
    constructor(props){
        super(props);
        this.state = {
            n: 12,
            elements: []
        };
        this.theWave = this.theWave.bind(this);
    }

    theWave () {
            const n = 12;
            while(n > 0){
                const elements = [
                    <div key="1" className="animation-container"></div>    
                ]
                elements.push(<div key="2" className="sound-container"></div>)
                this.state.n -= 1;
            }
    };
    render() {

        return(
            <div className="animation-container">
                <div className="sound-container">
                    <div className="rect-1"></div>
                    <div className="rect-2"></div>	
                    <div className="rect-3"></div>	
                    <div className="rect-4"></div>	
                    <div className="rect-5"></div>	
                    <div className="rect-6"></div>	
                    <div className="rect-5"></div>
                    <div className="rect-4"></div>	
                    <div className="rect-3"></div>
                    <div className="rect-2"></div>
                    <div className="rect-1"></div>	
                </div>
            </div>
        );
    }
}

export default SoundWave;
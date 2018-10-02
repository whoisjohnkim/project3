import React, {Component} from "react";
import Navbar from "../components/Navbar";
import "../components/Players";
import token1 from "../images/onePixel.png";
import token2 from "../images/twoPixel.png";
import token3 from "../images/threePixel.png";
import token4 from "../images/fourPixel.png";
import token5 from "../images/fivePixel.png";
 


class Game extends Component {
    render () {
        return (
            <div>
                <Navbar />
                <div className="games-img">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 text-center">Who's Playing?</div>
                    </div>

                    <div className="btn-group stage" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary">
                            <img className="spinner" src={token1} alt="one token" width="100px" />
                        </button>
                        <button type="button" className="btn btn-secondary">
                            <img className="spinner" src={token2} alt="one token" width="100px" />
                        </button>
                        <button type="button" className="btn btn-secondary">
                            <img className="spinner" src={token3} alt="one token" width="100px" />
                        </button>
                        <button type="button" className="btn btn-secondary">
                            <img className="spinner" src={token4} alt="one token" width="100px" />
                        </button>
                        <button type="button" className="btn btn-secondary">
                            <img className="spinner" src={token5} alt="one token" width="100px" />
                        </button>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Game;
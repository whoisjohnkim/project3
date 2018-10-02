import React, {Component} from "react";
import Navbar from "../components/Navbar";
import "../components/Game.css";
 


class Game extends Component {
    state = {
        isOpen: false
    };

    toggleOpen = () => this.setState({
        isOpen: !this.state.isOpen
    });

    render () {
        const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""} text-center`;
        return (
            <div>
                <Navbar />
                <div className="games-img">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 text-center">Who's Playing?</div>
                    </div>
                        <div className="dropdown" onClick={this.toggleOpen}>
                            <button className="btn dropdown-toggle text-center btn-lg" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Players!
                            </button>
                            <div className= {menuClass} aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item rounded" href="#nogo">One</a>
                                <a className="dropdown-item rounded" href="#nogo">Two</a>
                                <a className="dropdown-item rounded" href="#nogo">Three</a>
                                <a className="dropdown-item rounded" href="#nogo">Four</a>
                                <a className="dropdown-item rounded" href="#nogo">Five</a>
                            </div>                          
                        </div>
                </div>
            </div>
        )
    }
}

export default Game;
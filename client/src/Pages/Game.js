import React, {Component} from "react";
import "../components/Game.css";
import Navbar from "../components/Navbar";
import playing from "../images/playing.jpg";
 


class Game extends Component {
    render () {
        return (
            <div>
                <Navbar />
                <div class="games-img">
                <p id= "game"> just the </p>
                <p id= "tipsy"> tipsy </p>
                </div>
            </div>
        )
    }
}

export default Game;
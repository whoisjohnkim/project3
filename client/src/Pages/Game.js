import React, {Component} from "react";
import "../components/Game.css";
import playing from "../images/playing.jpg";



class Game extends Component {
    state =  {
        turns: [],
        order: []
    };


    render () {
        return (
            <div>
                <div class="games-img">
                <p id= "game"> just the </p>
                <p id= "tipsy"> tipsy </p>
                </div>
            </div>
        )
    }
}

export default Game;
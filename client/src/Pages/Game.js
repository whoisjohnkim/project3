import React, {Component} from "react";
import "../components/Game.css";
import Navbar from "../components/Navbar";
import playing from "../images/playing.jpg";
import { log } from "util";
import API from "../utils/API";


class Game extends Component {
    state =  {
        title: "",
        description: "",
        rating: 0,
        turns: []
    };

    componentDidMount() {
        this.loadGame();
    };

    loadGame = () => {
        API.getInteractive()
            .then(res => {
                this.setState({title: res.data.title, description: res.data.description, rating: res.data.rating, turns: res.data.turns})
            })
            .catch(err => console.log(err));
    };

    render () {
        return (
            <div>
                <Navbar />
                <div class="games-img">
                <p id= "game"> just the </p>
                <p id= "tipsy"> tipsy </p>
                </div>
                <div>
                    <h3>{this.state.title}</h3>
                    <h5>{this.state.rating}</h5>
                    <p>{this.state.description}</p>
                </div>
            </div>
        )
    }
}

export default Game;
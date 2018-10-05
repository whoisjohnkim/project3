import React, {Component} from "react";
import "../components/Game.css";
import Navbar from "../components/Navbar";
import playing from "../images/playing.jpg";
import { log } from "util";
import API from "../utils/API";
import game from "../game.json";


class Game extends Component {
    state =  {
        title: "",
        description: "",
        players: [],
        rating: 0,
        turns: [],
        order: [],
        turnNumber: 0,
        currentTurn: ""
    };

    componentDidMount() {
        this.loadGame();
    };

    loadGame = () => {
        // API.getInteractive()
        //     .then(res => {
        //         this.setState({title: res.data.title, description: res.data.description, rating: res.data.rating, turns: res.data.turns})
        //     })
        //     .catch(err => console.log(err));
        this.setState({
            title: game.title,
            description: game.description,
            turns: game.turns,
            players: ["Player1", "Player2", "Player3", "Player4"]
        })
        this.setOrder();
    };

    setOrder = () => {
        var order = [];
        for(var i = 0; i < this.state.turns.length; i++){
            order.push(i);
        }
        this.setState({order: order, turnNumber: 0, currentTurn: "Start the Game to Get Just the Tipsy!"});
        this.shuffle();
    };

    shuffle = () => {
        var array = this.state.order;
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        this.setState({order: array});
    };

    nextTurn = () => {
        var name1, name2;
        var random1, random2;
        random1 = Math.floor(Math.random() * this.state.players.length);
        random2 = random1;
        while(random1 === random2){
            random2 = Math.floor(Math.random() * this.state.players.length)
        };
        if(this.state.turnNumber === this.state.turns.length){
            this.setOrder();
        }
        else{
            this.setState({currentTurn: this.state.players[random1] + this.state.turns[this.state.turnNumber] + this.state.players[random2], turnNumber: this.state.turnNumber + 1});
        }

    }

    render () {
        return (
            <div>
                <Navbar />
                <div className="games-img">
                    <p id= "game"> just the </p>
                    <p id= "tipsy"> tipsy </p>
                </div>
                <div>
                    <h3>{this.state.title}</h3>
                    <h4>{this.state.currentTurn}</h4>
                    <p>{this.state.description}</p>
                </div>
                <button type="button" onClick={this.nextTurn}>Next Turn!</button>
            </div>
        )
    }
}

export default Game;
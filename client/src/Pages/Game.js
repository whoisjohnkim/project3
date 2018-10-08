import React, {Component} from "react";
import "../components/Game.css";
import Navbar from "../components/Navbar";
import playing from "../images/playing.jpg";
import { log } from "util";
import API from "../utils/API";
import game from "../game.json";

import token1 from "../images/onePixel.png";
import token2 from "../images/twoPixel.png";
import token3 from "../images/threePixel.png";
import token4 from "../images/fourPixel.png";
import token5 from "../images/fivePixel.png";


class Game extends Component {
    state =  {
        title: "",
        description: "",
        players: [],
        rating: 0,
        turns: [],
        order: [],
        turnNumber: 0,
        currentTurn: "",
        phase: "title",
        value: ""
    };

    componentDidMount() {
        this.handleChange = this.handleChange.bind(this);
    };

    clearPlayers = () => {
        this.setState({players: []});
    }

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
            players: ["Player1", "Player2", "Player3", "Player4"],
            phase: "players"
        })
    };

    handleChange(event) {
        this.setState({value: event.target.value});
    };

    setOrder = () => {
        if(this.state.players.length < 2){
            this.setState({phase: "players"})
        }
        else{
            var order = [];
            for(var i = 0; i < this.state.turns.length; i++){
                order.push(i);
            }
            this.setState({order: order, turnNumber: 0, phase: "started",  currentTurn: "Everyone Take a Drink!"});
            this.shuffle();
        }

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
        if(this.state.players.length > 1) {
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
        else{
            this.setState({currentTurn: "Please Enter At Least Two Players To Play This Game", phase: "players"});
        }

    };

    restart = () => {
        this.setState({phase: "title"});
    }

    addPlayer = () => {
        var array = this.state.players;
        array.push(this.state.value);
        this.setState({players: array, value: ""});
    }

    render () {
        let display;
        if(this.state.phase === "started"){
            display = (<div className="games-img" onClick={this.nextTurn}>
                        <span className="gameSpan">
                            <p id="gameText">{this.state.currentTurn}</p>
                            <br/>
                            <button type="button" className="btn btn-success playerButton " onClick={this.restart}>Restart Game</button>
                        </span>
                    </div>)
        }
        else if(this.state.phase === "title"){
            display = (<div className="games-img" onClick={this.loadGame}>
                <p id= "game"> just the </p>
                <p id= "tipsy"> tipsy </p>
            </div>)
        }
        else if(this.state.phase === "players"){
            display = (<div className="games-img">
                <span className="playerSpan">
                    <input type="text" className="playerName" value={this.state.value} onChange={this.handleChange}/><br></br>
                    <button type="button" className="btn btn-secondary playerButton " onClick={this.addPlayer}>Add Player</button>
                    <button type="button" className="btn btn-success playerButton " onClick={this.setOrder}>Start Game</button>
                    <button type="button" className="btn btn-secondary playerButton " onClick={this.clearPlayers}>Clear Players</button>
                    <span className="players">
                        <h3>Current Players:</h3>
                        {this.state.players.map(player => (
                            <p>{player}</p>
                        ))}
                    </span>
                </span>

            </div>)
        }
        return (
            <div>
                <Navbar />
                {display}
            </div>
        )
    }
}

export default Game;
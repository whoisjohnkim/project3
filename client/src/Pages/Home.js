import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from './Game';
import Guides from './Guides';
import Food from './Food';
import Playlist from './Playlist';
import KingsCup from './KingsCup';
import Waterfall from './Waterfall';
import BeerPong from './BeerPong';
import Cup from './21cup';
import Odds from './Odds';
import Skull from './SkullAndDice';
import Cheers from './CheersToTheGovernor';
import Navbar from "../components/Navbar";
// import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";
import Jumbotron from "../components/Jumbotron";
import cheers from "../images/cheers.jpg";
import playing from "../images/playing.jpg";
import shots from "../images/shots.jpg";

import "../components/Home.css";



class Home extends Component {
    render() {
        return (
            <div>
                {/* <Jumbotron /> */}
                <Navbar />
                <div class="home-img">
                <Switch>
                    <Route exact path="/home/game" component={Game} />
                    <Route exact path="/home/guides" component={Guides} />
                    <Route exact path="/home/playlist" component={Playlist} />
                    <Route exact path="/home/food" component={Food} />
                </Switch>
                <p id="we"> we </p>
                <div class= "drunk">
                <span class="part part--left">
                    <span class="letter">D</span>	
                    <span class="letter">R</span>	
                </span>
                <span class="part part--center">
                    <span class="letter letter--i">I</span>
                    {/* <span class="letter letter--o">A</span> */}
                    <span class="letter letter--U">U</span>
                </span>
                <span class="part part--right">
                    <span class="letter">N</span>
                    <span class="letter">K</span>
                </span>
                </div>
                <br />
                {/* <p id= "invite"> let's drink </p> */}
                </div>
            </div>
        )
    }
}

export default Home;
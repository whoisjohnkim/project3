import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OnTap from './Pages/OnTap';
import Home from './Pages/Home';
import Login from './components/Login/Login';
// import Navbar from "./components/Navbar";
import Game from './Pages/Game';
import Guides from './Pages/Guides';
import Food from './Pages/Food';
import Playlist from './Pages/Playlist';
// import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";
// import Jumbotron from "./components/Jumbotron";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={OnTap} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/guides" component={Guides} />
            <Route exact path="/food" component={Food} />
            <Route exact path="/playlist" component={Playlist} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;


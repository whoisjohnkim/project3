import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import Games from './Pages/Games';
import Guides from './pages/Guides';
import Food from './pages/Food';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/games" component={Games} />
        <Route exact path="/players" component={Players} />
        <Route exact path="/usernames" component={Usernames} />
        <Route exact path="/guides" component={Guides} />
        <Route exact path="/food" component={Food} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;


import React, {Component} from 'react';
import "./Food/Food.css";
import Navbar from "../components/Navbar";



class Food extends Component {

    render() {
        return (
            
            <div className= "divContainer">
                <Navbar />
                <h1>
                    Fooooood!!!
                </h1>

                <p>
                    This is some of the best foods to eat while you are drinking! Or maybe have already had too much to drink!
                </p>

                <ol className="list">
                    <li>Pizza!</li>
                    <li>Chips and dip!</li>
                    <li>Hamburgers!</li>
                    <li>Chili cheese dogs!</li>
                </ol>
            </div>
        )
    }
}

export default Food;
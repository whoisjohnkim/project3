import React, {Component} from 'react';
import "./Food/Food.css";

const divStyle = {
    color: 'blue',
    background: 'white'
}
class Food extends Component {

    render() {
        return (
            <div style={{width: 800}} style={divStyle}>
                <h1>
                    Fooooood!!!
                </h1>

                <p>
                    This is some of the best foods to eat while you are drinking! Or maybe have already had too much to drink!
                </p>

                <ul>
                    <li>Pizza!</li>
                    <li>Chips and dip!</li>
                    <li>Hamburgers!</li>
                    <li>Chili cheese dogs!</li>
                </ul>
            </div>
        )
    }
}

export default Food;
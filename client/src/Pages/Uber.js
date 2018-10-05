import React, {Component} from "react";
import Navbar from "../components/Navbar";
import "../components/Guides.css";


class Uber extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <a href="https://m.uber.com/ul/?action=setPickup"><img src='../../images/Uber_Logo_Black.png' onClick="https://m.uber.com/ul/?action=setPickup" /></a>

            </div>
        );
    };
};

export default Uber;

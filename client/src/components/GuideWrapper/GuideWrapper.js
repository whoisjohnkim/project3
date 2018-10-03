import React, { Component } from "react";
import Guide from "../Guide"
class Books extends Component {
    state = {
        book: {}
    };

    render() {
        return (
            <Guide/>
        )
    }
};

export default Books;
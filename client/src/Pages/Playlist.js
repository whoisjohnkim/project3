import React, {Component} from "react";
import Navbar from "../components/Navbar";
import "../components/Playlist.css";


class Playlist extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="playlist-img"></div>
            </div>
        )
    }
}

export default Playlist;
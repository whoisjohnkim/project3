import React, {Component} from "react";
import Navbar from "../components/Navbar";
import "../components/Playlist.css";


class Playlist extends Component {
    render() {
        return (
            <div>
                <iframe src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DXcBWIGoYBM5M" width="1680" height="100%" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <Navbar />
                <div className="playlist-img"></div>
            </div>
        )
    }
}

export default Playlist;
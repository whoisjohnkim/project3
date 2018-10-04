import React, {Component} from "react";
import Navbar from "../components/Navbar";
import "../components/Playlist.css";


class Playlist extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <iframe src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DXcBWIGoYBM5M" width="1680" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                
                <div className="playlist-img"></div>
                <iframe id="playlist" src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DXcBWIGoYBM5M" width="1680" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> 
            </div>
        )
    }
}

export default Playlist;
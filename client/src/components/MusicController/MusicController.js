import React, {Component} from "react";
import "./MusicController.css";


class MusicController extends Component {
    render() {
        return (
            <div>
                <iframe title="musicController" id="musicController" src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DXcBWIGoYBM5M" width="1680" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> 
            </div>
        )
    }
}

export default MusicController;
import React, {Component} from "react";
import Navbar from "../components/Navbar";
import "../components/Playlist.css";


class Playlist extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="playlist-img">
                    <div>
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col">                            
                                <div className="card">
                                    <div className="card-body">
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col">                            
                                <div className="card">
                                    <div className="card-body">
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        
                        </div>

                    </div>
               </div>
                <div className="playlist-img"></div>
                {/* <iframe id="playlist" src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DXcBWIGoYBM5M" width="1680" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>  */}
            </div>
        )
    }
}

export default Playlist;
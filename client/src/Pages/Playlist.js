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
                                    <img className="card-img-top" src=".../100px180/" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                    <img className="card-img-top" src=".../100px180/" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col">                            
                                <div className="card">
                                    <img className="card-img-top" src=".../100px180/" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <img className="card-img-top" src=".../100px180/" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                    <img className="card-img-top" src=".../100px180/" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col">                            
                                <div className="card">
                                    <img className="card-img-top" src=".../100px180/" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        
                        </div>

                    </div>
               </div>
            </div>
        )
    }
}

export default Playlist;
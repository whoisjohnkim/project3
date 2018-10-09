import React, {Component} from "react";
import Navbar from "../components/Navbar";
import "../components/Playlist.css";
import "./Playlist/Playlist.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Playlist extends Component {
    render() {
        return (
            <div>
                <Navbar />
                    <div className="wholePage">
                        <Carousel>
                            <div>
                                <iframe src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DXdgnLr18vPvu" width="410" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                            </div>
                            <div>
                                <iframe src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX4WYpdgoIcn6" width="410" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                            </div>

                            <div>
                                    <iframe src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX0XUsuxWHRQd" width="410" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                            </div>
                        </Carousel>
                    </div>
            </div>
        )
    }
}

export default Playlist;

                {/* <div className="playlistContainer">
                    <div className='playlistcard'>
                        <Card>
                            <CardBody>
                                <CardSubtitle className="cardsubtitle">Tailgate Party</CardSubtitle>
                                <br></br>
                                <CardTitle className="cardTitle"><iframe src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DXdgnLr18vPvu" width="410" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></CardTitle>
                            </CardBody>
                        </Card>
                    </div>
                

                
                    <div className='playlistcard'>
                        <Card>
                            <CardBody>
                                <CardSubtitle className="cardsubtitle">Chill Hits</CardSubtitle>
                                <br></br>
                                <CardTitle className="cardTitle"><iframe src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX4WYpdgoIcn6" width="410" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></CardTitle>
                                
                            </CardBody>
                        </Card>
                    </div>
                

                                            
                    <div className='playlistcard'>
                        <Card>
                            <CardBody>
                                <CardSubtitle className="cardsubtitle">Rap Caviar</CardSubtitle>
                                <br></br>
                                <CardTitle className="cardTitle"><iframe src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX0XUsuxWHRQd" width="410" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></CardTitle>
                                
                            </CardBody>
                        </Card>
                    </div>

                    <div className='playlistcard'>
                        <Card>
                            <CardBody>
                                <CardSubtitle className="cardsubtitle">Housewerk</CardSubtitle>
                                <br></br>
                                <CardTitle className="cardTitle"><iframe src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DXa8NOEUWPn9W" width="410" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></CardTitle>
                                
                            </CardBody>
                        </Card>
                    </div>

                    <div className='playlistcard'>
                        <Card>
                            <CardBody>
                                <CardSubtitle className="cardsubtitle">Throwback Jams</CardSubtitle>
                                <br></br>
                                <CardTitle className="cardTitle"><iframe src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX8ky12eWIvcW" width="410" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></CardTitle>
                                
                            </CardBody>
                        </Card>
                    </div>

                    <div className='playlistcard'>
                        <Card>
                            <CardBody>
                                <CardSubtitle className="cardsubtitle">Rock Anthems</CardSubtitle>
                                <br></br>
                                <CardTitle className="cardTitle"><iframe src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DWWwzidNQX6jx" width="410" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></CardTitle>
                                
                            </CardBody>
                        </Card>
                    </div>
                </div> */}                        


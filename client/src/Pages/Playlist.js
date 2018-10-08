import React, {Component} from "react";
import Navbar from "../components/Navbar";
import "../components/Playlist.css";
import { Card, CardImg, CardText, CardBody, CardLink,
CardTitle, CardSubtitle, Button } from 'reactstrap';
import "./Playlist/Playlist.css";


class Playlist extends Component {
    render() {
        return (
            <div>
                <Navbar />

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
            </div>
                           
                        
                        
        )
    }
}

export default Playlist;


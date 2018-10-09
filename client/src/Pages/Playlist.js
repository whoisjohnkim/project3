import React, {Component} from "react";
import NewNavbar from "../components/Navbar";
import "../components/Playlist.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Card,
  CardBody
} from 'reactstrap';

const items = [
    {
        src:"https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DXdgnLr18vPvu"
    },
    {
        src:"https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX4WYpdgoIcn6"
    },
    {
        src:"https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX0XUsuxWHRQd"
    },
    {
        src:"https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DXa8NOEUWPn9W"
    },
    {
        src:"https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX8ky12eWIvcW"
    },
    {
        src:"https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DWWwzidNQX6jx"
    }
  ];

class Playlist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
      }

      onExiting() {
        this.animating = true;
      }

      onExited() {
        this.animating = false;
      }

      next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }

      previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }

      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }

    render() {

<<<<<<< HEAD
                    <div className='playlistcard' id="">
                        <Card>
                            <CardBody>
                                <CardSubtitle className="cardsubtitle">Rock Anthems</CardSubtitle>
                                <br></br>
                                <CardTitle className="cardTitle"><iframe src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DWWwzidNQX6jx" width="410" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></CardTitle>
                                
                            </CardBody>
                        </Card>
                    </div>
=======
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
          return (
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}
            >

            <Card
                className="playlist-card"
            >
                <CardBody>
                    <iframe title="Spotify Playlist" src={item.src} width="410" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </CardBody>
            </Card>

            </CarouselItem>
          );
        });

        return (
            <div>
                <NewNavbar />
                <div className="playlist-img">
                    <Carousel
                        activeIndex={activeIndex}
                        next={this.next}
                        previous={this.previous}
                        interval={false}
                    >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}/>
                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next}/>
                    </Carousel>
>>>>>>> 9951a93c763acce0af29a8645a73d1f352455e25
                </div>
            </div>
        )
    }
}

export default Playlist;

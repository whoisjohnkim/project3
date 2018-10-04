import React, {Component} from "react";
import Navbar from "../components/Navbar";
import "../components/Guides.css";
import GuideWrapper from "../components/GuideWrapper"


import API from "../utils/API";

class Guides extends Component {
    state = {
        guides: [],
        id: ""
    };

    componentDidMount() {
        this.loadGuides();
    };

    upVote = (id) => {
        API.updateGame(id,
            {
                title: this.state.title,
                rating: this.state.rating + 1,
                description: this.state.description,
                picture: this.state.picture
            })
            .then(res => {
                this.setState({id: id, title: res.data.title, rating: res.data.rating, description: res.data.description, picture: res.data.picture});
            })
            .catch(err => console.log(err));
    }

    downVote = (id) => {
        API.updateGame(id,
            {
                title: this.state.title,
                rating: this.state.rating - 1,
                description: this.state.description,
                picture: this.state.picture
            })
            .then(res => {
                this.setState({id: id, title: res.data.title, rating: res.data.rating, description: res.data.description, picture: res.data.picture});
            })
            .catch(err => console.log(err));
    }

    loadGuides = () => {
        API.getGames()
            .then(res =>
                this.setState({guides: res.data})
            )
            .catch(err => console.log(err));
    };


    render() {
        return (
            <div>
                <Navbar />
                <div className="guides-img">
                </div>
                Games:
                <ul>
                    {this.state.guides.map(guide => (
                        <GuideWrapper
                            key={guide._id}
                            title={guide.title}
                            rating={guide.rating}
                            upVote={this.upVote}
                            downVote={this.downVote}
                            description={guide.description}
                        />
                    ))}
                </ul>
            </div>
        );
    };
};

export default Guides;

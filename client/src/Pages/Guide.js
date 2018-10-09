import React, {Component} from "react";
import Navbar from "../components/Navbar";
import "../components/Guides.css";
import GuideWrapper from "../components/GuideWrapper"

import API from "../utils/API";

class Guide extends Component {
    state = {
        title: "",
        rating: 0,
        description: [],
        id: "",
        picture: ""
    };

    componentDidMount() {
        console.log(this.props.match.params.id);
        this.loadGuide();
    };

    upVote = () => {
        API.updateGame(this.state.id,
            {
                title: this.state.title,
                rating: this.state.rating + 1,
                description: this.state.description,
                picture: this.state.picture
            })
            .then(
                    this.setState({rating: this.state.rating + 1})
                )
            .catch(err => console.log(err));
    }

    downVote = () => {
        API.updateGame(this.state.id,
            {
                title: this.state.title,
                rating: this.state.rating - 1,
                description: this.state.description,
                picture: this.state.picture
            })
            .then(
                this.setState({rating: this.state.rating - 1})
                )
            .catch(err => console.log(err));
    }

    loadGuide = () => {
        API.getGame(this.props.match.params.id)
            .then(res => {
                this.setState({id: this.props.match.params.id, title: res.data.title, rating: res.data.rating, description: res.data.description, picture: res.data.picture});
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Navbar />
                <div className="guides-img">
                    <GuideWrapper
                            key={this.state.id}
                            title={this.state.title}
                            rating={this.state.rating}
                            picture={this.state.picture}
                            upVote={this.upVote}
                            downVote={this.downVote}
                            description={this.state.description}
                        />
                </div>
            </div>
        );
    };
};

export default Guide;

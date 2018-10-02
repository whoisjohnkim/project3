import React, {Component} from "react";
import Navbar from "../components/Navbar";
import "../components/Guides.css";

import API from "../utils/API";

class Guide extends Component {
    state = {
        title: "",
        rating: 0,
        description: [],
        id: ""
    };

    componentDidMount() {
        console.log(this.props.match.params.id);
        this.loadGuide();
    };

    loadGuide = () => {
        API.getGame(this.props.match.params.id)
            .then(res => {
                this.setState({id: this.props.match.params.id, title: res.data.title, rating: res.data.rating, description: res.data.description});
                // console.log(this.state.title);
                // console.log(this.state.rating);
                // console.log(this.state.description);
            }

            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Navbar />
                <div className="guides-img">
                </div>
                <ul>
                        <li>
                            <ul>
                                <li>
                                    Title: {this.state.title}
                                </li>
                                <li>
                                    Rating: {this.state.rating}
                                </li>
                                <li>
                                    Directions
                                    <ul>
                                        {this.state.description.map(step=> (
                                            <li>
                                                {step}
                                            </li>
                                        ))}
                                    </ul>

                                </li>
                            </ul>
                        </li>
                </ul>
            </div>
        );
    };
};

export default Guide;

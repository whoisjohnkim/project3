import React, {Component} from "react";
import Navbar from "../components/Navbar";
import "../components/Guides.css";


import API from "../utils/API";

class Guides extends Component {
    state = {
        guides: [],
        id: ""
    };

    componentDidMount() {
        this.loadGuides();
    };

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
                        <li>
                            <img src={guide.picture}/>
                            <ul>
                                <li>
                                    Title: {guide.title}
                                </li>
                                <li>
                                    Rating: {guide.rating}
                                </li>
                                <li>
                                    Directions
                                    <ul>
                                        {guide.description.map(step=> (
                                            <li>
                                                {step}
                                            </li>
                                        ))}
                                    </ul>

                                </li>
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };
};

export default Guides;

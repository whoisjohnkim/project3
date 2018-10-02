import React, {Component} from "react";
import API from "../utils/API";

class Guides extends Component {
    state = {
        guides: []
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

    logData = () => {
        console.log(this.state.guides)
    }

    render() {
        return (
            <div>
            Games:
            <ul>
                {this.state.guides.map(guide => (
                    <li>
                        <ul>
                            <li>
                                {guide.title}
                            </li>
                            <li>
                                {guide.rating}
                            </li>
                            <li>
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
        )
    }
}

export default Guides;

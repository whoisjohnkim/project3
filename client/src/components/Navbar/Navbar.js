import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import API from "../../utils/API";

import onTapLogo from "../../images/OnTapLogoUpdated.svg";


class Navbar extends Component {
    constructor () {
        super();
        this.state = {
            showGuide: false,
            guides: []
        };

        this.showGuide = this.showGuide.bind(this);

    }

    showGuide(event) {
        event.preventDefault();

        this.setState({
            showGuide: true,
        });
    }

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

    refreshPage = () => {
        window.location.reload();
    }

    render(){
        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/home">
            <img id="logo" src={ onTapLogo } alt="logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* ////////////////////////////////////////// */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <Link
                        to="/game"
                        className={
                            window.location.pathname === "/game"
                            ? "nav-link active"
                            : "nav-link"
                        }
                    >
                    GAME
                    </Link>
                    </li>
                {/* ////////////////////////////////////////// */}

                    <li className="nav-item dropdown"
                        // onMouseOver={this.showGuide}
                    >
                    <Link
                        to="/guides"
                        className={
                             "nav-link dropdown-toggle"
                        } 
                        >
                        GUIDE
                    </Link>
                    {
                        this.state.showGuide

                        ? (
                        <div aria-labelledby="navbarDropdown" onClick={this.refreshPage}>
                            
                            {this.state.guides.map(guide => (
                                <Link to={"/guides/" + guide._id} className="dropdown-item">
                                    {guide.title}
                                </Link>
                            ))}
                        </div>
                        )
                        : (
                            null
                        )
                    }
                    </li>

                    {/* ////////////////////////////////////////// */}
                    <li className="nav-item">
                    <Link
                        to="/playlist"
                        className={
                            window.location.pathname === "/playlist"
                              ? "nav-link active"
                              : "nav-link"
                          }
                     >
                    PLAYLIST
                    </Link>
                    </li>
                    {/* ////////////////////////////////////////// */}
                    <li className="nav-item">
                    <Link
                        to="/food"
                        className={
                            window.location.pathname === "/food"
                              ? "nav-link active"
                              : "nav-link"
                          }
                    >
                    DRUNCHIES
                    </Link>
                    </li>
                </ul>

            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            </div>
        </nav>
        )
    };
};

export default Navbar;

// const menuClass = `dropdown-menu${this.state.isOpen ? "" : ""}`;

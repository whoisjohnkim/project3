import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import API from "../../utils/API";
import Logged from "../Logged/Logged";

import onTapLogo from "../../images/OnTapLogoUpdated.svg";


class Navbar extends Component {
    constructor () {
        super();
        this.state = {
            isOpen: false,
            guides: []
        };

    }

    handleOpen (event) {
        event.preventDefault();
        
        this.setState({isOpen: true})
    }

    handleClose () {

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

        const menuClass = `dropdown-menu${this.state.isOpen ? "" : ""}`;

        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/home">
            <img id="logoNav" src={ onTapLogo } alt="logo" />
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

                    <li 
                        className="nav-item dropdown"
                        // onMouseOver={this.showGuide}
                    >
                    <Link
                        to="/guides"
                        className={
                             "nav-link dropdown-toggle" 
                        } id="dropdownMenuButton"
                        >
                        GUIDE
                    </Link>
                    {
                        this.state.showGuide

                        ? (
                        <div className={menuClass} id="hovermenu" aria-labelledby="navbarDropdown" onClick={this.refreshPage}>
                            
                            {this.state.guides.map(guide => (
                                <Link to={"/guides/" + guide._id} id="hovermenu" className="dropdown-item">
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
                {/* ${ this.state.logged ? <Logged /> : "No user currently Logged In"} */}
            </div>
        </nav>
        )
    };
};

export default Navbar;


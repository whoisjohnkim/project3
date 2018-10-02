import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = props => (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/home">
            ON TAP
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <Link 
                        to="/home/game"
                        className={
                            window.location.pathname === "/home/game"
                            ? "nav-link active"
                            : "nav-link"
                        }
                    >
                    GAME
                    </Link>
                    </li>

                    <li className="nav-item">
                    <Link
                        to="/home/guides"
                        className={
                            window.location.pathname === "/home/guides"
                            ? "nav-link active"
                            : "nav-link"
                        }
                        >
                        GUIDE
                    </Link>
                    {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link
                            to="/"
                            className="dropdown-item">
                        Action
                        </Link>
                        <Link to="/"
                        className="dropdown-item">
                        Another action
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link
                            to="/"
                            className="dropdown-item">
                        Something else here
                        </Link>
                    </div> */}
                    </li>

                    <li className="nav-item">
                    <Link
                        to="/home/playlist"
                        className={
                            window.location.pathname === "/home/playlist"
                              ? "nav-link active"
                              : "nav-link"
                          }
                     >
                    PLAYLIST
                    </Link>
                    </li>
                    
                    <li className="nav-item">
                    <Link
                        to="/home/food"
                        className={
                            window.location.pathname === "/home/food"
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
);

export default Navbar;
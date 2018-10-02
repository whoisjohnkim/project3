import React, {Component} from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";

import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';




class Navbar extends Component {

    render() {
        return (   
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/home">ON TAP</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
           
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                <a className="nav-link" href="/home/game">GAME</a>
                </li>

                <UncontrolledDropdown>
                <DropdownToggle caret>
                {/* <a className="nav-link" href="/home/guide">GUIDE</a> */}
                <a className="nav-link" href="/home/guide">GUIDE </a>
                </DropdownToggle>
                <DropdownMenu>
                    <center>
                    <DropdownItem divider />
                    <DropdownItem>
                    <a className="nav-link" href="/home/kingscup">KING'S CUP</a>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    <a className="nav-link" href="/home/beerpong">BEER PONG</a>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    <a className="nav-link" href="/home/21cup">21 CUP</a>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    <a className="nav-link" href="/home/flipcup">FLIP CUP</a>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    <a className="nav-link" href="/home/odds">ODDS</a>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    <a className="nav-link" href="/home/titanic">TITANIC</a>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    <a className="nav-link" href="/home/stackcup">STACK CUP</a>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    <a className="nav-link" href="/home/skullanddice">SKULL AND DICE</a>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    <a className="nav-link" href="/home/cheerstothegovernor">CHEERS TO THE GOVERNOR</a>
                    </DropdownItem>
                    </center>
                </DropdownMenu>
            </UncontrolledDropdown>

                <li className="nav-item">
                <a className="nav-link" href="/home/playlist">PLAYLIST</a>
                </li><li className="nav-item">
                <a className="nav-link" href="/home/food">DRUNCHIES</a>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            </div>
        </nav>

        
        );
    }
}
export default Navbar;
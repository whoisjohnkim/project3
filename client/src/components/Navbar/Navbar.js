import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import API from "../../utils/API";
import Logged from "../Logged/Logged";

//stuff from reactstrap for new nav
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

import onTapLogo from "../../images/OnTapLogoUpdated.svg";


class NewNavbar extends Component {

    // new navbar states
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          guides: []

        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
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

    // SO THAT THE GUIDES WILL SHOW WHEN CLICKED
    refreshPage = () => {
        window.location.reload();
    }

    render(){

        return (
            <div>
                {/* THIS IS THE NEW NAVBAR */}

                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/home">
                        <img id="logoNav" src={ onTapLogo } alt="logo" />
                    </NavbarBrand>

                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/game">GAME</NavLink>
                            </NavItem>

                            {/* THE GUIDE THAT WORKS */}
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                GUIDE
                                </DropdownToggle>

                                {/* RENDERING THE GUIDES */}
                                <DropdownMenu right>                            
                                    <DropdownItem onClick={this.refreshPage}>
                                    {this.state.guides.map(guide => (
                                    <Link to={"/guides/" + guide._id} id="hovermenu" className="dropdown-item">
                                        {guide.title}
                                    </Link>
                                    ))}
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <NavItem>
                                <NavLink href="/playlist">PLAYLIST</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/food">DRUNCHIES</NavLink>
                            </NavItem>


                        </Nav>
                    </Collapse>
                </Navbar>
      </div>
        )
    };
};

export default NewNavbar;


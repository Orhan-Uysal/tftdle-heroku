import React, { Component } from 'react';
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import background from "./img/tftdlelogo.png";
export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return <Navbar color="dark" dark  className='ml-auto'>
            <NavbarBrand className='mx-auto'>
                <img
                    alt="logo"
                    src={require("./img/tftdlelogo.png")}
                    style={{
                        height: 30,
                        width: 110
                    }}
                />
            </NavbarBrand>
            {/* <NavbarToggler onClick={this.toggle}  />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="mr-auto" navbar >
                    <NavItem>
                        <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='ml-auto' href="https://github.com/reactstrap/reactstrap">
                            GitHub
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse> */}
            {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Options
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem href="/Home">Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown> */}
            {/* <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/Home">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Login</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse> */}
        </Navbar>;
    }
}
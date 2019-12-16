import React from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';



class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            props
        }
    }

    render() {
        return (
            <Navbar color="dark" light expand="md">
                <NavbarBrand className="text-white" href="/">Estudiantes</NavbarBrand>
                <NavbarToggler />
                <Collapse navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink className="text-white" href="/groups/" onClick={this.handleClick}>Grupos</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )


    }
}

export default Navigation
import React from 'react';
import { FaHome } from 'react-icons/fa';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
} from 'reactstrap';

const Navigation = (props) => (
    <Navbar color="dark" light expand="md" fixed="top">
        <NavbarBrand className="text-white" href="/"><FaHome /></NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
            <Nav className="mr-auto" navbar>
                {props.children}
            </Nav>
        </Collapse>
    </Navbar>
)

export default Navigation
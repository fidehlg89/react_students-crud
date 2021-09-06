import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
} from 'reactstrap';

const Navigation = (props) => (
    <Navbar color="dark" light expand="md" fixed="top">
        <Link className="text-white navbar-brand" to="/"><FaHome /></Link>
        <NavbarToggler />
        <Collapse navbar>
            <Nav className="mr-auto" navbar>
                {props.children}
            </Nav>
        </Collapse>
    </Navbar>
)

export default Navigation
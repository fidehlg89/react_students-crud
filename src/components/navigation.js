import React from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
} from 'reactstrap';
import { FaHome } from 'react-icons/fa';

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            props
        }
    }   

    render() {
        return (
            <Navbar color="dark" light expand="md" fixed="top">
                <NavbarBrand className="text-white" href="/"><FaHome/></NavbarBrand>
                <NavbarToggler />
                <Collapse navbar>
                    <Nav className="mr-auto" navbar>
                        {this.props.children}
                    </Nav>
                </Collapse>
            </Navbar>
        )


    }
}

export default Navigation
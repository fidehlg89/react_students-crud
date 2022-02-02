import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Alignment, Button } from "@blueprintjs/core";

const Navigation = (props) => (
    <Navbar className="bp3-dark" style={{height:40+'px'}} fixedToTop="true">
        <Navbar.Group align={Alignment.LEFT} style={{height:40+'px'}}>
            <Navbar.Heading style={{margin: '0 auto', width: 30+'px'}}>
                <Link to="/" className="text-white navbar-brand">
                    <Button className="bp3-minimal" icon="home" />
                </Link>
            </Navbar.Heading>
            <Navbar.Divider />
            <Link to="/estudiantes" className="text-white nav-link">
                <Button className="bp3-minimal" icon="person" text="Listado de Estudiantes" />
            </Link>
            <Link to="/grupos" className="text-white nav-link">
                <Button className="bp3-minimal" icon="people" text="Grupos" />
            </Link>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT} style={{height:40+'px'}}>
            <Button className="bp3-minimal" icon="log-out" />
        </Navbar.Group>
    </Navbar>
)

export default Navigation
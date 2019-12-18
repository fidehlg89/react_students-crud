import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './components/layout'
import Navigation from './components/navigation'

import {
    NavItem,
    NavLink
} from 'reactstrap'

const SiteRoot = () => {
    return (
        <React.Fragment>
            <Navigation>
                <NavItem>
                    <NavLink className="text-white" href="/estudiantes">ESTUDIANTES</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="text-white" href="/grupos">GRUPOS</NavLink>
                </NavItem>
            </Navigation>
            <Layout>
                <App/>
            </Layout>
        </React.Fragment>
    );
}

ReactDOM.render(<SiteRoot />, document.getElementById('root'));
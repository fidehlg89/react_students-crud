import React from "react"
import StudentPage from "../pages/Student"
import GroupPage from "../pages/Group"
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Home from "../pages/Site/Home"
import NotFound from "../pages/Site/NotFound"
import Navigation from './navigation'
import {
    NavItem
} from 'reactstrap'

const App = () => {
    return (
        <BrowserRouter>
            <Navigation>
                <NavItem>
                    <Link to="/estudiantes" className="text-white nav-link">
                        ESTUDIANTES
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/grupos" className="text-white nav-link">
                        GRUPOS
                    </Link>
                </NavItem>
            </Navigation>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/estudiantes" component={StudentPage} />
                <Route exact path="/grupos" component={GroupPage} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;

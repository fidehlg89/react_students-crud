import React from "react"
import StudentPage from "../pages/Student"
import GroupPage from "../pages/Group"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from "../pages/Site/Home"
import NotFound from "../pages/Site/NotFound";
import CreateGroup from "../pages/Group/CreateGroup";
import Navigation from "./navigation"

const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <Navigation/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/estudiantes" component={StudentPage} />
                    <Route exact path="/grupos" component={GroupPage} />
                    <Route exact path="/grupos/nuevo" component={CreateGroup} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;

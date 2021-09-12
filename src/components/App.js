import React from "react"
import StudentPage from "../pages/Student"
import GroupPage from "../pages/Group"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from "../pages/Site/Home"
import NotFound from "../pages/Site/NotFound";
import CreateGroup from "../pages/Group/CreateGroup";
import Navigation from "./navigation";
import CreateStudent from "../pages/Student/CreateStudent";
import { Card, Elevation } from "@blueprintjs/core";

const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <Navigation />
                <Card elevation={Elevation.TWO}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/estudiantes" component={StudentPage} />
                        <Route exact path="/estudiantes/nuevo" component={CreateStudent} />
                        <Route exact path="/grupos" component={GroupPage} />
                        <Route exact path="/grupos/nuevo" component={CreateGroup} />
                        <Route component={NotFound} />
                    </Switch>
                </Card>
            </BrowserRouter>
        </div>
    );
}

export default App;

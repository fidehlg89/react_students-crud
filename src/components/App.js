import React from "react"
import StudentPage from "../pages/Student"
import GroupPage from "../pages/Group"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from "../pages/Site/Home"
import NotFound from "../pages/Site/NotFound"

const App = () => {
        return (
            <BrowserRouter>
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

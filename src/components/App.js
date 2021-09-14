import React from "react"
import StudentPage from "../pages/Student"
import GroupPage from "../pages/Group"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Card, Elevation } from "@blueprintjs/core";
import Home from "../pages/Site/Home"
import NotFound from "../pages/Site/NotFound";
import CreateGroup from "../pages/Group/CreateGroup";
import Navigation from "./navigation";
import CreateStudent from "../pages/Student/CreateStudent";
import UpdateStudent from "../pages/Student/UpdateStudent"
import UpdateGroup from "../pages/Group/UpdateGroup";
import store from './../redux/store';
import { Provider } from 'react-redux';

const App = () => {
    return (
        <div className="container">
            <Provider store={store}>
                <BrowserRouter>
                    <Navigation />
                    <Card elevation={Elevation.TWO}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/estudiantes" component={StudentPage} />
                            <Route exact path="/estudiantes/nuevo" component={CreateStudent} />
                            <Route exact path="/estudiantes/editar/:id" component={UpdateStudent} />
                            <Route exact path="/grupos" component={GroupPage} />
                            <Route exact path="/grupos/nuevo" component={CreateGroup} />
                            <Route exact path="/grupos/editar/:id" component={UpdateGroup} />
                            <Route component={NotFound} />
                        </Switch>
                    </Card>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;

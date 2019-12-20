import React from "react"
import StudentPage from "./pages/student"
import GroupPage from "./pages/group"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainContainer from "./pages"
import NotFound from "./pages/NotFound"

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MainContainer} />
                    <Route exact path="/estudiantes" component={StudentPage} />
                    <Route exact path="/grupos" component={GroupPage} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;

import React from "react"
import { BrowserRouter, Route } from 'react-router-dom'
import StudentPage from "./pages/student"
import GroupPage from "./pages/group"

class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Route path="/" component={StudentPage} />
                    <Route path="/groups" component={GroupPage} />
                </BrowserRouter>
            </React.Fragment>
        );
    }

}

export default App;

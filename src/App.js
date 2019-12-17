import React from "react"
import StudentPage from "./pages/student";
import GroupPage from "./pages/group";
import { BrowserRouter, Route} from 'react-router-dom'
import MainContainer from "./pages";

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Route path="/" component={MainContainer} />
                <Route path="/students" component={StudentPage} />
                <Route path="/groups" component={GroupPage} />
            </BrowserRouter>
        );
    }

}

export default App;

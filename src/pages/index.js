import React from "react";
import "./style.css"

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            props
        }
    }
    renderMainPage() {
        return (
            <div className="jumbotron" align="center" hidden={this.state.isHidden}>
                <h1>Bienvenidos!</h1>
                <p className="lead">Sistema de Gestión de Estudiantes</p>
                <p><a className="btn btn-lg btn-secondary" href="/estudiantes"> Administrar estudiantes</a></p>
            </div>
        );
    }
    render() {
        return (
            <div className="site-index">
                {this.renderMainPage()}
            </div>
        )
    }
}

export default MainContainer;
import React from "react";
import "./style.css"

const Home = () =>
(
    <div className="site-index">
        <div className="jumbotron" align="center">
            <h1>Bienvenidos!</h1>
            <p className="lead">Sistema de Gestión de Estudiantes</p>
            <p><a className="btn btn-lg btn-secondary" href="/estudiantes"> Administrar estudiantes</a></p>
        </div>
    </div>
)


export default Home;
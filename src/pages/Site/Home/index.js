import React from "react";
import "./style.css"
import { Link } from "react-router-dom";

const Home = () =>
(
    <div className="site-index">
        <div className="jumbotron" align="center">
            <h1>Bienvenidos!</h1>
            <p className="lead">Sistema de Gestión de Estudiantes</p>
            <p>
                <Link to="/estudiantes" className="btn btn-lg btn-secondary">
                    Administrar estudiantes
                </Link>
            </p>
        </div>
    </div>
)


export default Home;
import React from "react";
import "./style.css"
import { Link } from "react-router-dom";
import {H1, H3} from '@blueprintjs/core'

const Home = () =>
(
    <div className="site-index">
        <div className="jumbotron" align="center">
            <H1>Bienvenidos!</H1>
            <H3>Sistema de Gestión de Estudiantes</H3>
            <p>
                <Link to="/estudiantes" className="btn btn-lg btn-secondary">
                    Administrar estudiantes
                </Link>
            </p>
        </div>
    </div>
)


export default Home;
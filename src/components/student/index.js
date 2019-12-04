import React from 'react';

import { FaEye, FaPen, FaTrash } from 'react-icons/fa'

function StudentList(props) {
    return (
        <div className="col-md-10">
            <h5>Estudiantes:</h5>
            <button className="btn btn-primary">Nuevo Estudiante</button>
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Sexo</th>
                        <th>Email</th>
                        <th>Fecha de Nacimiento</th>
                        <th>Lugar de Nacimiento</th>
                        <th>Grupo</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th><FaEye /> <FaPen /> <FaTrash /></th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default StudentList
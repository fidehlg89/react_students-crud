import React from "react";
import Table from "../../components/table";
import { useHistory } from 'react-router-dom'
import { Button, ButtonGroup, Icon, H5, Spinner } from "@blueprintjs/core";

const StudentsList = ({ students, onDelete, loading }) => {
    const history = useHistory();
    const onEdit = (id) => {
        history.push("/estudiantes/editar/" + id);
    }
    return (
        <div>
            <H5>Lista de Estudiantes</H5>
            <Button onClick={() => history.push("/estudiantes/nuevo")} intent="primary">Nuevo Estudiante</Button>
            {loading === true ? <div><Spinner intent="primary" size={50} /></div> : null}
            {students!=null && students.length > 0 ? (
                <Table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Edad</th>
                            <th>Sexo</th>
                            <th>Fecha Nacimiento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((item, index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.age}</td>
                                <td>{item.sex}</td>
                                <td>{item.birthDate}</td>
                                <td>
                                    <ButtonGroup minimal>
                                        <Button intent="success" onClick={() => onEdit(item.id)}><Icon icon="edit" size={12} /></Button>
                                        <span className="bp3-divider"></span>
                                        <Button intent="danger" onClick={() => onDelete(item)}><Icon icon="trash" size={12} /></Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </Table>
            ) : !loading && students.length === 0 ? <p><H5 className="info">No hay registros para mostrar</H5></p> : null
            }
        </div>
    );
};

export default StudentsList;

import React from "react";
import { groups, professors } from "./../../db/data";
import Table from "../../components/table";
import { Link } from 'react-router-dom'

const GroupList = (props) => {
  return (
    <div>
      <h5>Lista de Grupos</h5>
      <Link className="btn btn-primary" to="/grupos/nuevo"> Nuevo Grupo</Link>
      {groups.length > 0 ? (
        <Table>
          <thead className="text-info">
            <tr>
              <th>Grupo</th>
              <th>Profesor</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((item) => (
              <tr key={item.id}>
                <th>{item.name}</th>
                <th>{professors[item.professorId - 1].name}</th>
                <th>
                  <div>
                    <button
                      type="submit"
                      className="btn btn-default btn-sm btn-success"
                    // onClick={() => onUpdateGroup(item.id)}
                    >
                      <span> Editar </span>
                    </button>
                    <span> | </span>
                    <button
                      className="btn btn-default btn-sm btn-danger"
                    // onClick={() => onDeleteGroup(item)}
                    >
                      <span> Eliminar </span>
                    </button>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : null}
    </div>
  );
};

export default GroupList;

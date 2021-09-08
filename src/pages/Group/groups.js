import React from "react";
import { groups, professors } from "./../../db/data";
import Table from "../../components/table";
import { Link } from 'react-router-dom'
import { Button, ButtonGroup, Icon } from "@blueprintjs/core";


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
                <ButtonGroup minimal>                   
                    <Button intent="success"><Icon icon="edit" size={12}/></Button>                    
                      <span className="bp3-divider"></span>
                      <Button intent="danger"><Icon icon="trash" size={12}/></Button>                  
                  </ButtonGroup>
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

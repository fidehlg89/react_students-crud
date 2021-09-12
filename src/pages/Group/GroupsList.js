import React from "react";
import Table from "../../components/table";
import { useHistory } from 'react-router-dom'
import { Button, ButtonGroup, Icon, H5, Spinner } from "@blueprintjs/core";

const GroupsList = ({ groups, handleDelete, loading }) => {
  const history = useHistory();
  return (
    <div>
      <H5>Lista de Grupos</H5>
      <Button onClick={() => history.push("/grupos/nuevo")} intent="primary">Nuevo Grupo</Button>
      {loading ? <div><Spinner intent="primary" size={50} /></div> : null}
      {groups.length > 0 ? (
        <Table>
          <thead>
            <tr>
              <th>Grupo</th>
              <th>Profesor</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.name}</td>
                <td>
                  <ButtonGroup minimal>
                    <Button intent="success"><Icon icon="edit" size={12} /></Button>
                    <span className="bp3-divider"></span>
                    <Button intent="danger" onClick={() => handleDelete(item)}><Icon icon="trash" size={12} /></Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))
            }
          </tbody>
        </Table>
      ) : !loading && groups.length === 0 ? <p><H5 className="info">No hay registros para mostrar</H5></p> : null
      }
    </div>
  );
};

export default GroupsList;

import React from "react";
import Table from "../../components/table";
import { useHistory } from 'react-router-dom'
import { Button, ButtonGroup, Icon, H5, Spinner } from "@blueprintjs/core";


const GroupsList = ({ groups, onDelete, loading }) => {
  const history = useHistory();
  const onEdit = (id) => {
    history.push("/grupos/editar/" + id);
  }

  return (
    <div>
      {/* {groups != null && groups.length > 0 ? groups.map((item, index) => (<li key={index}>item.name</li>)) : null} */}
      <H5>Lista de Grupos</H5>
      <Button onClick={() => history.push("/grupos/nuevo")} intent="primary">Nuevo Grupo</Button>
      {loading === true ? <div><Spinner intent="primary" size={50} /></div> : null}
      {groups != null && groups.length > 0 ? (
        <Table>
          <thead>
            <tr>
              <th>No</th>
              <th>Grupo</th>
              <th>Profesor</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((item, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.name}</td>
                <td>
                  <ButtonGroup minimal>
                    <Button intent="success" onClick={() => onEdit(item.id)}><Icon icon="edit" size={12} /></Button>
                    <span className="bp3-divider"></span>
                    <Button intent="danger" onClick={()=>onDelete(item)}><Icon icon="trash" size={12} /></Button>
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

export default GroupsList

import React, { useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import Form from "../../components/form";
import Table from "../../components/table";
import { groups, professors, /*students*/ } from "./../../db/data";

const GroupList = (props) => {
  const [id, setId]=useState();
  const [groupList, setGroups] = useState([groups]);
  const [professorList, setProfessors] = useState(professors);
  //const [studentList, setStudents] = useState(students);

  const [isCreating, setCreating] = useState(false);
  const [isUpdating, setUpdating] = useState(false);

  const [professorOption, setProfOptions] = useState("");
  //const [groupProfesorId, setProfId] = useState(0);

  const onCreateGroup = () => {
    let professorlist = professorList.map((item) => (
      <option value={item.id} key={item.id}>
        {item.name}
      </option>
    ));
    setProfessors(professorlist);
    setCreating(!isCreating);
  };
  const renderCreateview = () => 
    (
      <div className="group-item-create">
        <h5>Crear Grupo</h5>
        <Form>
          <input type="text" placeholder="Nombre" ref="theTextNameInput" />
          <div>
            <span>Seleccione Profesor: </span>
            <select
              value={professorOption}
              ref="theTextProfessorInput"
              onChange={handleProfSelect}
            >
              {professors}
            </select>
          </div>
          <button onClick={onNewGroup} className="btn btn-success btn-sm">
            Guardar
          </button>
          <span> </span>
          <button onClick={isCreating} className="btn btn-danger btn-sm">
            Cancelar
          </button>
        </Form>
      </div>
    );

    const onNewGroup = () => {
        setGroups([
            ...groups,
            {
              id: Date.now(),
              name: this.refs.theTextNameInput.value,
              professorId: this.refs.theTextProfessorInput.value,
            }])
        setCreating(false);
        setProfessors(professors);
  };
  //Editando Grupos
  const onUpdateGroup = (i) => {
    const index = groups.findIndex((n) => n.id === i);
    if (index === -1) {
      return;
    }
    let professorlist = professors.map((item) => (
      <option value={item.id} key={item.id}>
        {item.name}
      </option>
    ));
    setProfessors(professorlist);
    setUpdating(isUpdating);
    setId(index);
  };
  const onEditGroup = () => {
    let group = groupList[id];
    group.name = this.refs.theTextNameInput.value;
    group.professorId = this.refs.theTextProfessorInput.value;
    setProfessors(professorList);
    setUpdating(!isUpdating);
  };
  const handleProfSelect = (e) => {
      setProfOptions(e.target.value);
  };
  //Formulario de Edición
  const renderUpdateview = (id) => {
    const group = groupList[id];
    
    return (
      <div className="group-item-create">
        <h5>Editar Grupo</h5>
        <Form>
          <input
            type="text"
            placeholder="Nombre"
            ref="theTextNameInput"
            defaultValue={group.name}
          />
          <div>
            <span>Seleccione un Profesor: </span>
            <select
              defaultValue={professorOption}
              ref="theTextProfessorInput"
              onChange={handleProfSelect}
            >
              {professors}
            </select>
          </div>
          <button onClick={onEditGroup} className="btn btn-success btn-sm">
            Guardar
          </button>
          <span> </span>
          <button className="btn btn-danger btn-sm">Cancelar</button>
        </Form>
      </div>
    );
  };
  //Eliminando Grupo
  const onDeleteGroup = (group) => {
    const index = groups.findIndex((n) => n.id === group.id);
    if (index === -1) {
      return;
    }
    const newItems = groups.slice();
    newItems.splice(index, 1);
    setGroups(newItems);
  };
  //Vista Principal del CRUD Grupos
  const renderDefaultview = () => {
    let itemslist = groupList.map((item) => (
      <tr key={item.id}>
        <th>{item.name}</th>
        <th>{professorList[item.professorId - 1].name}</th>
        <th>
          <div>
            <button
              type="submit"
              className="btn btn-default btn-sm btn-success"
              onClick={() => onUpdateGroup(item.id)}
            >
              <FaPen />
            </button>
            <span> </span>
            <button
              className="btn btn-default btn-sm btn-danger"
              onClick={() => onDeleteGroup(item)}
            >
              <FaTrash />
            </button>
          </div>
        </th>
      </tr>
    ));
    return (
      <div>
        {
          <section className="panel">
            <h5 className="panel-heading">Listado de Grupos</h5>
            <button
              className="new-group-item btn btn-primary btn-sm"
              onClick={onCreateGroup}
            >
              {" "}
              Nuevo Grupo
            </button>
            <div className="panel-body">
              {itemslist.length > 0 ? (
                <div>
                  <Table>
                    <thead className="text-info">
                      <tr>
                        <th>Grupo</th>
                        <th>Profesor</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>{itemslist}</tbody>
                  </Table>
                </div>
              ) : (
                <p className="text-danger">
                  No existen grupos, haga click en el botón Nuevo grupo
                </p>
              )}
            </div>
          </section>
        }
      </div>
    );
  };

  <div className="container">
    {isCreating || isUpdating
      ? ""
      : renderDefaultview()}
    {isCreating ? renderCreateview() : ""}
    {isUpdating ? renderUpdateview(id) : ""}
  </div>;
};

export default GroupList;

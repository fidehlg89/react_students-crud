import React, { useState } from 'react';
import Form from "../../components/form";
import { professors, groups } from "./../../db/data.json";
import { useHistory } from "react-router-dom";

const CreateGroup = () => {
    const history = useHistory();
    const [group, setGroup] = useState("");
    const [professor, setProfessor] = useState("");
    const [groupsList, setGroups] = useState(groups);

    const onNewGroup = (e) => {
        e.preventDefault();
        setGroups([
            ...groupsList,
            {
                id: Date.now(),
                name: group,
                professorId: professor,
            }])
        history.push("/grupos");
        console.log(groupsList);
    };

    const handleChange = (e) => {
        setGroup(e.target.value);
        setProfessor(e.target.value);
    }

    return (
        <div>
            <div className="group-item-create">
                <h5>Crear Grupo</h5>
                <Form>
                    <input type="text" placeholder="Nombre" onChange={handleChange} />
                    <div>
                        <span>Seleccione Profesor: </span>
                        <select id="select" onChange={handleChange}>
                            {professors.map((item, index) => (
                                <option key={index} value={item.id}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                    <button onClick={onNewGroup} className="btn btn-success btn-sm">
                        Guardar
                    </button>
                    <span> </span>
                    <button className="btn btn-danger btn-sm">
                        Cancelar
                    </button>
                </Form>
            </div>
        </div>
    )
};

export default CreateGroup;
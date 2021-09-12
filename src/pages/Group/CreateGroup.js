import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    FormGroup,
    Label,
    Classes,
    H3,
    ButtonGroup,
    Button
} from '@blueprintjs/core';
import axiosAPI from "./../../service/api"

const CreateGroup = () => {
    const history = useHistory();
    const [group, setGroup] = useState([]);

    const handleSubmit = async e => {
        e.preventDefault();
        axiosAPI
            .post("group", group)
            .then((response) => {
                if (response.status === 201) {
                    alert('Creado satisfactoriamente');
                    history.push("/grupos");
                }
            }).catch((error) => {
                alert('Error al procesar la información, intentelo más tarde. ' + error.response)
            })
    }

    const handleChange = (e) => {
        e.preventDefault();
        setGroup({
            ...group,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div style={{ width: 500 + 'px' }}>
            <H3>Nuevo Grupo</H3>
            <form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>
                    Nombre
                    <input className={Classes.INPUT} name="name" placeholder="Nombre" onChange={handleChange} />
                </Label>
                <ButtonGroup>
                    <Button intent="primary" type="submit" text="Guardar y Salir" ></Button>
                    <span className="bp3-divider"></span>
                    {/* <Button type="reset" text="Guardar y Crear" onClick={NewStudent}></Button> */}
                </ButtonGroup>
            </FormGroup>
            </form>
        </div>
    )
};

export default CreateGroup;
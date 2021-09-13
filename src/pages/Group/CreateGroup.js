import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    H3
} from '@blueprintjs/core';
import axiosAPI from "./../../service/api"
import GroupForm from '../../components/GroupForm';

const CreateGroup = () => {
    const history = useHistory();
    const [group, setGroup] = useState({name:""});

    const onSubmit = async e => {
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

    const onChange = (e) => {
        e.preventDefault();
        setGroup({
            ...group,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div style={{ width: 500 + 'px' }}>
            <H3>Nuevo Estudiante</H3>
            <GroupForm onSubmit={onSubmit} onChange={onChange} form={group} />
        </div>
        )
};

export default CreateGroup;
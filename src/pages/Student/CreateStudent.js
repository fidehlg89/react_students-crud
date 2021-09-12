import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    H3
} from '@blueprintjs/core';
import axiosAPI from "./../../service/api"
import Form from "./../../components/Form"

const CreateStudent = () => {
    const history = useHistory();
    const [student, setStudent] = useState([]);

    const onSubmit = async e => {
        e.preventDefault();
        axiosAPI
            .post("student", student)
            .then((response) => {
                if (response.status === 201) {
                    alert('Creado satisfactoriamente');
                    history.push("/estudiantes");
                }
            }).catch((error) => {
                alert('Error al procesar la información, intentelo más tarde. ' + error.response)
            })
    }

    const onChange = (e) => {
        e.preventDefault();
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div style={{ width: 500 + 'px' }}>
            <H3>Nuevo Estudiante</H3>
            <Form onSubmit={onSubmit} onChange={onChange} form={student} />
        </div>
    )
};

export default CreateStudent;
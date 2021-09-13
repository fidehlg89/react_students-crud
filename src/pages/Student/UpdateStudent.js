import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import StudentForm from "../../components/StudentForm"
import axiosAPI from '../../service/api';
import {
    H3
} from '@blueprintjs/core';

const UpdateStudent = () => {
    const history=useHistory();
    const params = useParams();
    const id = params.id;
    const [student, setStudent] = useState({name:"", email:"", age:"", sex:"", birthDate:""});

    const getStudent = (id) => {
        axiosAPI
            .get('student/' + id)
            .then((response) => {
                var data = response.data;
                setStudent(data);
            }).catch((error) => {
                console.log(error.response)
            })
    }

    const onSubmit = async e => {
        e.preventDefault();
        axiosAPI
            .put("student/" + id, {...student, "id":id})
            .then((response) => {
                if (response.status === 204) {
                    alert('Actualizado satisfactoriamente');
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

    useEffect(() => {
        getStudent(id);
    }, [id])

    return (
        <div style={{ width: 500 + 'px' }}>
            <H3>Actualizar Estudiante</H3>
            <StudentForm onSubmit={onSubmit} onChange={onChange} form={student} />
        </div>
    )
};

export default UpdateStudent;
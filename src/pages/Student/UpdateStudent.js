import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import StudentForm from "../../components/StudentForm"
import axiosAPI from '../../service/api';
import {
    H3
} from '@blueprintjs/core';
import { connect } from 'react-redux';
import { updateStudentAsync } from '../../redux/actions/asyncActions/studentAsync';

const UpdateStudent = ({ updateStudent }) => {
    const history = useHistory();
    const params = useParams();
    const id = params.id;
    const [student, setStudent] = useState({ name: "", email: "", age: "", sex: "", birthDate: "" });

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
        await updateStudent(student);
        history.push("/estudiantes");

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

const mapDispatchToProps = (dispatch) => ({
    updateStudent: (item) => dispatch(updateStudentAsync(item))
})

export default connect(null, mapDispatchToProps)(UpdateStudent);
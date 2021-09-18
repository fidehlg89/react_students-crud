import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    H3
} from '@blueprintjs/core';
import StudentForm from "./../../components/StudentForm";

import { connect } from 'react-redux';
import { createStudentAsync } from '../../redux/actions/asyncActions/studentAsync';

const CreateStudent = ({createStudent}) => {
    const history = useHistory();
    const [student, setStudent] = useState({ name: "", email: "", age: "", sex: "", birthDate: "" });

    const onSubmit = async e => {
        e.preventDefault();
        await createStudent(student);
        history.push("/estudiantes");
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
            <StudentForm onSubmit={onSubmit} onChange={onChange} form={student} />
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    createStudent: (item) => dispatch(createStudentAsync(item))
})

export default connect(null, mapDispatchToProps)(CreateStudent);
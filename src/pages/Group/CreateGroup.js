import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    H3
} from '@blueprintjs/core';
import GroupForm from '../../components/GroupForm';


import { connect } from 'react-redux';
import { createGroupAsync } from '../../redux/actions/asyncActions/groupAsync';

const CreateGroup = ({createGroup}) => {
    const history = useHistory();
    const [group, setGroup] = useState({name:""});

    const onSubmit = async e => {
        e.preventDefault();
        await createGroup(group);
        history.push("/grupos");
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

const mapDispatchToProps = (dispatch) => ({
    createGroup: (item) => dispatch(createGroupAsync(item))
})

export default connect(null, mapDispatchToProps)(CreateGroup);
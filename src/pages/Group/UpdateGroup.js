import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import GroupForm from "../../components/GroupForm"
import axiosAPI from '../../service/api';
import {
    H3
} from '@blueprintjs/core';
import { connect } from 'react-redux';
import { updateGroupAsync } from '../../redux/actions/asyncActions/groupAsync';

const UpdateGroup = ({updateGroup}) => {
    const history=useHistory();
    const params = useParams();
    const id = params.id;
    const [group, setGroup] = useState({name:""});

    const getGroup = (id) => {
        axiosAPI
            .get('group/' + id)
            .then((response) => {
                var data = response.data;
                setGroup(data);
            }).catch((error) => {
                console.log(error.response)
            })
    }

    const onSubmit = async e => {
        e.preventDefault();
        await updateGroup(group);
        history.push("/grupos");
    }

    const onChange = (e) => {
        e.preventDefault();
        setGroup({
            ...group,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        getGroup(id);
    }, [id])

    return (
        <div style={{ width: 500 + 'px' }}>
            <H3>Actualizar Grupo</H3>
            <GroupForm onSubmit={onSubmit} onChange={onChange} form={group} />
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    updateGroup: (item) => dispatch(updateGroupAsync(item))
})

export default connect(null, mapDispatchToProps)(UpdateGroup);
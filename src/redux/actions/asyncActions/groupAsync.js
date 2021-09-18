import { toast } from "react-toastify";
import axiosAPI from "../../../service/api";
import {
    getGroup, getGroupSuccess, getGroups, getGroupsSuccess, countGroups,
    deleteGroup, /* deleteGroupSuccess, */ deleteGroupFailure
} from "../groupActions";

// get Group list
export const getGroupAsync = (id) => async dispatch => {
    console.log(id);
    dispatch(getGroup);
    try {
        const res = await axiosAPI.get("group/" + id);
        const item = res.data
        dispatch(getGroupSuccess(item));
    } catch (err) {
        console.log(err);
    }
}

// get Group list
export const getGroupsAsync = () => async dispatch => {
    dispatch(getGroups);
    try {
        const res = await axiosAPI.get('group');
        const data = res.data;
        dispatch(getGroupsSuccess(data));
        dispatch(countGroups(data.length));
    } catch (err) {
        console.log(err);
    }
}

// create Group async
export const createGroupAsync = (group) => async dispatch => {
    try {
        const res = await axiosAPI.post('group', group);
        toast.success(res.data.message);
    } catch (err) {
        toast.success(err);
    }
}

// update group
export const updateGroupAsync = (group) => async dispatch => {
    console.log(group);
    try {
        const res = await axiosAPI.put('group/' + group.id, { ...group, "id": group.id });
        console.log(res.data);
        toast.success(res.data.message);
    } catch (err) {
        toast.success(err);
    }
}

// delete group
export const deleteGroupAsync = (group) => async dispatch => {
    dispatch(deleteGroup);
    try {
        const res = await axiosAPI.delete('group/' + group.id);
        if (res.status === 204) {
            alert('Objeto eliminado');
            dispatch(getGroupsAsync());
            //dispatch(deleteGroupSuccess());
        } else alert('No se ha podido eliminar el objeto');
    } catch (err) {
        dispatch(deleteGroupFailure(err));
        alert("Error eliminando el objeto. " + err);
    }
}
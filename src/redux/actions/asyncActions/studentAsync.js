import { toast } from "react-toastify";
import axiosAPI from "../../../service/api";
import {
    getStudent, getStudentSuccess, getStudents, getStudentsSuccess, countStudents,
    deleteStudent, /* deleteStudentSuccess, */ deleteStudentFailure
} from "../studentActions";

// create Student async
export const createStudentAsync = (student) => async dispatch => {
    try {
        const res = await axiosAPI.post('student', student);
        toast.success(res.data.message);
    } catch (err) {
        toast.success(err);
    }
}

// read Student async
export const getStudentAsync = (id) => async dispatch => {
    dispatch(getStudent);
    try {
        const res = await axiosAPI.get(`${"student/" + id}`);
        const data = res.data;
        dispatch(getStudentSuccess(data));
    } catch (err) {
        console.log(err);
    }
}

// get Students list async
export const getStudentsAsync = () => async dispatch => {
    dispatch(getStudents);
    try {
        const res = await axiosAPI.get('student');
        const data = res.data;
        dispatch(getStudentsSuccess(data));
        dispatch(countStudents(data.length));
    } catch (err) {
        console.log(err);
    }
}

export const updateStudentAsync = (student) => async dispatch => {
    try {
        const res = await axiosAPI.put('student/' + student.id, { ...student, "id": student.id });
        toast.success(res.data.message);
    } catch (err) {
        toast.success(err);
    }
}

// delete student
export const deleteStudentAsync = (student) => async dispatch => {
    dispatch(deleteStudent);
    try {
        const res = await axiosAPI.delete('student/' + student.id);
        if (res.status === 200) {
            alert('Objeto eliminado');
            dispatch(getStudentsAsync());
            //dispatch(deleteStudentSuccess());
        } else alert('No se ha podido eliminar el objeto');
    } catch (err) {
        dispatch(deleteStudentFailure(err));
        alert("Error eliminando el objeto. " + err);
    }
}
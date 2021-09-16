import { toast } from "react-toastify";
import axiosAPI from "../../../service/api";
import {
    getStudent, getStudentSuccess, getStudents, getStudentsSuccess, countStudents,
    deleteStudent, deleteStudentSuccess, deleteStudentFailure
} from "../studentActions";

// get Student list
export const getStudentAsync = (id) => async dispatch => {
    dispatch(getStudent);
    try {
        const res = await axiosAPI.get(`${"student/" + id}`);
        const item = res.data.data
        dispatch(getStudentSuccess(item));
    } catch (err) {
        console.log(err);
    }
}

// get Student list
export const getStudentsAsync = () => async dispatch => {
    dispatch(getStudents);
    try {
        const res = await axiosAPI.get('student');
        const data = res.data;
        console.log(data);
        dispatch(getStudentsSuccess(data));
        dispatch(countStudents(data.length));
    } catch (err) {
        console.log(err);
    }
}

// create Student async
export const createStudentAsync = (student) => async dispatch => {
    try {
        const res = await axiosAPI.post('student', student);
        toast.success(res.data.message);
    } catch (err) {
        toast.success(err);
    }
}

// delete student
export const deleteStudentAsync = (student) => async dispatch => {
    dispatch(deleteStudent);
    try {
        const res = await axiosAPI.delete(`student/` + student.id);
        if (res.status === 204) {
            alert('Objeto eliminado');
            dispatch(getStudentAsync());
            dispatch(deleteStudentSuccess());
        } else alert('No se ha podido eliminar el objeto');
    } catch (err) {
        dispatch(deleteStudentFailure(err));
        alert("Error eliminando el objeto. " + err);
    }
}
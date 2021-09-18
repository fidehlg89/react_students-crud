import {
    GET_STUDENT, GET_STUDENT_SUCCESS, GET_STUDENTS, GET_STUDENTS_SUCCESS, GET_STUDENT_FAILURE, COUNT_STUDENTS,
    DELETE_STUDENT, DELETE_STUDENT_SUCCESS, DELETE_STUDENT_FAILURE, MESSAGE
} from "../actions/actionTypes";

// define initial state of STUDENT
const initialState = {
    student: null
}

// update store based on type and payload and return the state
export default function common(state = initialState, action) {
    switch (action.type) {
        case GET_STUDENT:
            return {
                ...state
            }
        case GET_STUDENT_SUCCESS:
            const { item } = action.payload
            return {
                ...state,
                item
            }
        case GET_STUDENTS:
            return {
                ...state
            }
        case GET_STUDENTS_SUCCESS:
            const { data } = action.payload
            return {
                ...state,
                data
            }
        case GET_STUDENT_FAILURE:
            const { error } = action.payload
            return {
                ...state,
                error
            }
        case COUNT_STUDENTS:
            const { count } = action.payload
            return {
                ...state,
                count
            }
        case DELETE_STUDENT:
            return {
                ...state
            }
        case DELETE_STUDENT_SUCCESS:
            return {
                ...state,
                data: action.payload.data
            }
        case DELETE_STUDENT_FAILURE:
            return {
                ...state,
                error: action.payload.error
            }
        case MESSAGE:
            return {
                ...state,
                message: action.payload.message
            }
        default:
            return state
    }
}
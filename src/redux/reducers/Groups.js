import {
    GET_GROUP, GET_GROUP_SUCCESS, GET_GROUPS, GET_GROUPS_SUCCESS, GET_GROUP_FAILURE, COUNT_GROUPS,
    DELETE_GROUP, DELETE_GROUP_SUCCESS, DELETE_GROUP_FAILURE, MESSAGE
} from "../actions/actionTypes";

// define initial state of GROUP
const initialState = {
    group: null
}

// update store based on type and payload and return the state
export default function common(state = initialState, action) {
    switch (action.type) {
        case GET_GROUP:
            return {
                ...state
            }
        case GET_GROUP_SUCCESS:
            const { item } = action.payload
            return {
                ...state,
                item
            }
        case GET_GROUPS:
            return {
                ...state
            }
        case GET_GROUPS_SUCCESS:
            const { data } = action.payload
            return {
                ...state,
                data
            }
        case GET_GROUP_FAILURE:
            const { error } = action.payload
            return {
                ...state,
                error
            }
        case COUNT_GROUPS:
            const { count } = action.payload
            return {
                ...state,
                count
            }
        case DELETE_GROUP:
            return {
                ...state
            }
        case DELETE_GROUP_SUCCESS:
            return {
                ...state,
                data: action.payload.data
            }
        case DELETE_GROUP_FAILURE:
            return {
                ...state,
                error: action.payload.error
            }
        case MESSAGE:
            return {
                ...state,
                message:action.payload.message
            }
        default:
            return state
    }
}
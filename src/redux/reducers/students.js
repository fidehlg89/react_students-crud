import { handleActions, combineActions } from 'redux-actions';
import {
  createStudent,
  createStudentSuccess,
  createStudentFailure,
  deleteStudent,
  deleteStudentSuccess,
  deleteStudentFailure,
  updateStudent,
  updateStudentSuccess,
  updateStudentFailure,
  patchStudent,
  patchStudentSuccess,
  patchStudentFailure,
  getStudent,
  getStudentSuccess,
  getStudentFailure,
  getAllStudents,
  getAllStudentsSuccess,
  getAllStudentsFailure,
} from '../actions/students';

const defaultState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  isFailure: false,
};

export default handleActions({
  [combineActions(
    createStudent,
    deleteStudent,
    updateStudent,
    patchStudent,
    getStudent,
    getAllStudents,
  )]: state => ({
    ...state,
    isLoading: true,
    isSuccess: false,
    isFailure: false,
  }),

  [combineActions(
    createStudentFailure,
    deleteStudentFailure,
    updateStudentFailure,
    patchStudentFailure,
    getStudentFailure,
    getAllStudentsFailure,
  )]: (state, action) => ({
    ...state,
    isLoading: false,
    isSuccess: false,
    isFailure: true,
    errorMessage: action.payload,
  }),

  [createStudentSuccess]: (state, action) => ({
    ...state,
    isLoading: false,
    isSuccess: true,
    isFailure: false,
    data: [...state.data, action.payload],
  }),

  [deleteStudentSuccess]: (state, action) => ({
    ...state,
    isLoading: false,
    isSuccess: true,
    isFailure: false,
    data: state.data.filter(n => n._id !== action.payload._id),
  }),

  [updateStudentSuccess]: (state, action) => ({
    ...state,
    isLoading: false,
    isSuccess: true,
    isFailure: false,
    data: state.data.map(n => n._id === action.payload._id ? action.payload : n),
  }),

  [patchStudentSuccess]: (state, action) => ({
    ...state,
    isLoading: false,
    isSuccess: true,
    isFailure: false,
    data: state.data.map(n => n._id === action.payload._id ? action.payload : n),
  }),

  [getStudentSuccess]: (state, action) => ({
    ...state,
    isLoading: false,
    isSuccess: true,
    isFailure: false,
    data: (() => {
      const index = state.data.findIndex(n => n._id === action.payload._id);

      if (index !== -1) {
        return state.data.map(n => n._id === action.payload._id ? action.payload : n);
      }

      return [...state.data, action.payload];
    })(),
  }),

  [getAllStudentsSuccess]: (state, action) => ({
    ...state,
    isLoading: false,
    isSuccess: true,
    isFailure: false,
    data: action.payload,
  }),
}, defaultState);

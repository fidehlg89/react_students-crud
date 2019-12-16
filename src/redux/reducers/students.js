import { handleActions, combineActions } from 'redux-actions';
import {
  createTodo,
  createTodoSuccess,
  createTodoFailure,
  deleteTodo,
  deleteTodoSuccess,
  deleteTodoFailure,
  updateTodo,
  updateTodoSuccess,
  updateTodoFailure,
  patchTodo,
  patchTodoSuccess,
  patchTodoFailure,
  getTodo,
  getTodoSuccess,
  getTodoFailure,
  getAllTodos,
  getAllTodosSuccess,
  getAllTodosFailure,
} from '../actions/todos';

const defaultState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  isFailure: false,
};

export default handleActions({
  [combineActions(
    createTodo,
    deleteTodo,
    updateTodo,
    patchTodo,
    getTodo,
    getAllTodos,
  )]: state => ({
    ...state,
    isLoading: true,
    isSuccess: false,
    isFailure: false,
  }),

  [combineActions(
    createTodoFailure,
    deleteTodoFailure,
    updateTodoFailure,
    patchTodoFailure,
    getTodoFailure,
    getAllTodosFailure,
  )]: (state, action) => ({
    ...state,
    isLoading: false,
    isSuccess: false,
    isFailure: true,
    errorMessage: action.payload,
  }),

  [createTodoSuccess]: (state, action) => ({
    ...state,
    isLoading: false,
    isSuccess: true,
    isFailure: false,
    data: [...state.data, action.payload],
  }),

  [deleteTodoSuccess]: (state, action) => ({
    ...state,
    isLoading: false,
    isSuccess: true,
    isFailure: false,
    data: state.data.filter(n => n._id !== action.payload._id),
  }),

  [updateTodoSuccess]: (state, action) => ({
    ...state,
    isLoading: false,
    isSuccess: true,
    isFailure: false,
    data: state.data.map(n => n._id === action.payload._id ? action.payload : n),
  }),

  [patchTodoSuccess]: (state, action) => ({
    ...state,
    isLoading: false,
    isSuccess: true,
    isFailure: false,
    data: state.data.map(n => n._id === action.payload._id ? action.payload : n),
  }),

  [getTodoSuccess]: (state, action) => ({
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

  [getAllTodosSuccess]: (state, action) => ({
    ...state,
    isLoading: false,
    isSuccess: true,
    isFailure: false,
    data: action.payload,
  }),
}, defaultState);

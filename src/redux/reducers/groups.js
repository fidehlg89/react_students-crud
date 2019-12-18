import { handleActions, combineActions } from 'redux-actions';
import {
  createGroup,
  createGroupSuccess,
  createGroupFailure,
  deleteGroup,
  deleteGroupSuccess,
  deleteGroupFailure,
  updateGroup,
  updateGroupSuccess,
  updateGroupFailure,
  patchGroup,
  patchGroupSuccess,
  patchGroupFailure,
  getGroup,
  getGroupSuccess,
  getGroupFailure,
  getAllGroups,
  getAllGroupsSuccess,
  getAllGroupsFailure,
} from '../actions/groups';

const defaultState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  isFailure: false,
};

export default handleActions({
  [combineActions(
    createGroup,
    deleteGroup,
    updateGroup,
    patchGroup,
    getGroup,
    getAllGroups,
  )]: state => ({
    ...state,
    isLoading: true,
    isSuccess: false,
    isFailure: false,
  }),

  [combineActions(
    createGroupFailure,
    deleteGroupFailure,
    updateGroupFailure,
    patchGroupFailure,
    getGroupFailure,
    getAllGroupsFailure,
  )]: (state, action) => ({
    ...state,
    isLoading: false,
    isSuccess: false,
    isFailure: true,
    errorMessage: action.payload,
  }),

  [createGroupSuccess]: (state, action) => ({
    ...state,
    isLoading: false,
    isSuccess: true,
    isFailure: false,
    data: [...state.data, action.payload],
  }),

  [deleteGroupSuccess]: (state, action) => ({
    ...state,
    isLoading: false,
    isSuccess: true,
    isFailure: false,
    data: state.data.filter(n => n._id !== action.payload._id),
  }),

  [updateGroupSuccess]: (state, action) => ({
    ...state,
    isLoading: false,
    isSuccess: true,
    isFailure: false,
    data: state.data.map(n => n._id === action.payload._id ? action.payload : n),
  }),

  [patchGroupSuccess]: (state, action) => ({
    ...state,
    isLoading: false,
    isSuccess: true,
    isFailure: false,
    data: state.data.map(n => n._id === action.payload._id ? action.payload : n),
  }),

  [getGroupSuccess]: (state, action) => ({
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

  [getAllGroupsSuccess]: (state, action) => ({
    ...state,
    isLoading: false,
    isSuccess: true,
    isFailure: false,
    data: action.payload,
  }),
}, defaultState);

import { takeEvery, put, call } from 'redux-saga/effects';
import {
  getAllGroups,
  updateGroup,
  patchGroup,
  createGroup,
  getGroup,
  deleteGroup,
} from '../actions/Groups';
import api from '../../services/api';

function parseErrorMessage(error) {
  let message;

  if (error.response) {
    message = error.response.data.error.message
  } else {
    message = error.message;
  }

  return message;
}

function* getGroupsHanlder(action) {
  try {
    const response = yield call(api.group.getAll);

    yield put(getAllGroupsSuccess(response.data.data));
  } catch (error) {
    const message = parseErrorMessage(error);

    yield put(getAllGroupsFailure(message));
  }
}

function* getGroupHandler(action) {
  try {
    const response = yield call(api.group.get, action.payload._id);

    yield put(getGroupsuccess(response.data.data));
  } catch (error) {
    const message = parseErrorMessage(error);

    yield put(getGroupFailure(message));
  }
}

function* updateGroupHanlder(action) {
  try {
    const response = yield call(api.group.update, action.payload._id, action.payload.data);

    yield put(updateGroupsuccess(response.data.data));
  } catch (error) {
    const message = parseErrorMessage(error);

    yield put(updateGroupFailure(message));
  }
}

function* createGroupHanlder(action) {
  try {
    const response = yield call(api.group.create, action.payload.data);

    yield put(createGroupsuccess(response.data.data));
  } catch (error) {
    const message = parseErrorMessage(error);

    yield put(createGroupFailure(message));
  }
}

function* deleteGroupHanlder(action) {
  try {
    const response = yield call(api.group.delete, action.payload._id);

    yield put(deleteGroupsuccess(response.data.data));
  } catch (error) {
    const message = parseErrorMessage(error);

    yield put(deleteGroupFailure(message));
  }
}

function* patchGroupHanlder(action) {
  try {
    const response = yield call(api.group.patch, action.payload._id, action.payload.data);

    yield put(patchGroupsuccess(response.data.data));
  } catch (error) {
    const message = parseErrorMessage(error);

    yield put(patchTodoFailure(message));
  }
}

export default function* rootSaga() {
  yield takeEvery(getTodo.toString(), getTodoHandler);
  yield takeEvery(getAllGroups.toString(), getGroupsHanlder);
  yield takeEvery(createTodo.toString(), createTodoHanlder);
  yield takeEvery(updateTodo.toString(), updateTodoHanlder);
  yield takeEvery(deleteTodo.toString(), deleteTodoHanlder);
  yield takeEvery(patchTodo.toString(), patchTodoHanlder);
};

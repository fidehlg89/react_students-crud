import { takeEvery, put, call } from 'redux-saga/effects';
import {
  getAllStudents,
  updateStudent,
  patchStudent,
  createStudent,
  getStudent,
  deleteStudent,
} from '../actions/Students';
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

function* getStudentsHanlder(action) {
  try {
    const response = yield call(api.student.getAll);

    yield put(getAllStudentsSuccess(response.data.data));
  } catch (error) {
    const message = parseErrorMessage(error);

    yield put(getAllStudentsFailure(message));
  }
}

function* getStudentHandler(action) {
  try {
    const response = yield call(api.student.get, action.payload._id);

    yield put(getStudentsuccess(response.data.data));
  } catch (error) {
    const message = parseErrorMessage(error);

    yield put(getStudentFailure(message));
  }
}

function* updateStudentHanlder(action) {
  try {
    const response = yield call(api.student.update, action.payload._id, action.payload.data);

    yield put(updateStudentsuccess(response.data.data));
  } catch (error) {
    const message = parseErrorMessage(error);

    yield put(updateStudentFailure(message));
  }
}

function* createStudentHanlder(action) {
  try {
    const response = yield call(api.student.create, action.payload.data);

    yield put(createStudentsuccess(response.data.data));
  } catch (error) {
    const message = parseErrorMessage(error);

    yield put(createStudentFailure(message));
  }
}

function* deleteStudentHanlder(action) {
  try {
    const response = yield call(api.student.delete, action.payload._id);

    yield put(deleteStudentsuccess(response.data.data));
  } catch (error) {
    const message = parseErrorMessage(error);

    yield put(deleteStudentFailure(message));
  }
}

function* patchStudentHanlder(action) {
  try {
    const response = yield call(api.student.patch, action.payload._id, action.payload.data);

    yield put(patchStudentsuccess(response.data.data));
  } catch (error) {
    const message = parseErrorMessage(error);

    yield put(patchTodoFailure(message));
  }
}

export default function* rootSaga() {
  yield takeEvery(getTodo.toString(), getTodoHandler);
  yield takeEvery(getAllStudents.toString(), getStudentsHanlder);
  yield takeEvery(createTodo.toString(), createTodoHanlder);
  yield takeEvery(updateTodo.toString(), updateTodoHanlder);
  yield takeEvery(deleteTodo.toString(), deleteTodoHanlder);
  yield takeEvery(patchTodo.toString(), patchTodoHanlder);
};

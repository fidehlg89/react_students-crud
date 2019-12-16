import { createAction } from 'redux-actions';

export const createStudent = createAction('createStudent');
export const createStudentSuccess = createAction('createStudentSuccess');
export const createStudentFailure = createAction('createStudentFailure');

export const deleteStudent = createAction('deleteStudent');
export const deleteStudentSuccess = createAction('deleteStudentSuccess');
export const deleteStudentFailure = createAction('deleteStudentFailure');

export const updateStudent = createAction('updateStudent');
export const updateStudentSuccess = createAction('updateStudentSuccess');
export const updateStudentFailure = createAction('updateStudentFailure');

export const patchStudent = createAction('patchStudent');
export const patchStudentSuccess = createAction('patchStudentSuccess');
export const patchStudentFailure = createAction('patchStudentFailure');

export const getStudent = createAction('getStudent');
export const getStudentSuccess = createAction('getStudentSuccess');
export const getStudentFailure = createAction('getStudentFailure');

export const getAllStudents = createAction('getAllStudents');
export const getAllStudentsSuccess = createAction('getAllStudentsSuccess');
export const getAllStudentsFailure = createAction('getAllStudentsFailure');
import {
  GET_STUDENT, GET_STUDENT_SUCCESS, GET_STUDENTS, GET_STUDENTS_SUCCESS, COUNT_STUDENTS,
  DELETE_STUDENT, DELETE_STUDENT_SUCCESS, DELETE_STUDENT_FAILURE, MESSAGE
} from "./actionTypes";

// to get the especifict STUDENT
export const getStudent = () => {
  return {
    type: GET_STUDENT
  }
}

// to get the especifict STUDENT
export const getStudentSuccess = (item) => {
  return {
    type: GET_STUDENT_SUCCESS,
    payload: {
      item
    }
  }
}

// to get the list of STUDENTs
export const getStudents = () => {
  return {
    type: GET_STUDENTS
  }
}

// to get the list of STUDENTs
export const getStudentsSuccess = (data) => {
  return {
    type: GET_STUDENTS_SUCCESS,
    payload: {
      data
    }
  }
}

// count STUDENTs
export const countStudents = (count) => {
  return {
    type: COUNT_STUDENTS,
    payload: {
      count
    }
  }
}

// Message
export const Message = (message) => {
  return {
    type: MESSAGE,
    payload: {
      message
    }
  }
}

// delete STUDENT
export const deleteStudent = (data) => {
  return {
    type: DELETE_STUDENT,
    payload: data
  }
}

// STUDENT delete success
export const deleteStudentSuccess = data => {
  return {
    type: DELETE_STUDENT_SUCCESS,
    payload: {
      data
    }
  }
}

// STUDENT delete failture
export const deleteStudentFailure = error => {
  return {
    type: DELETE_STUDENT_FAILURE,
    payload: {
      error
    }
  }
}
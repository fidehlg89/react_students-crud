import React, { useEffect } from "react";
import StudentsList from "./StudentsList";
import { connect } from 'react-redux';
import { getStudentsAsync, deleteStudentAsync } from '../../redux/actions/asyncActions/studentAsync';

const StudentPage = ({ students, studentsData, deleteStudent, loading = 'false' }) => {

  useEffect(() => {
    studentsData();
  }, [studentsData]);

  return (
    <StudentsList
      students={students}
      onDelete={deleteStudent}
      loading={loading}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    students: state.students.data
  }
}

const mapDispatchToProps = (dispatch) => ({
  studentsData: () => dispatch(getStudentsAsync()),
  deleteStudent: (item) => dispatch(deleteStudentAsync(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(StudentPage);

import React, { useEffect } from "react";
import StudentsList from "./StudentsList";
import axiosAPI from "./../../service/api";
import { connect } from 'react-redux';
import { getStudentsAsync } from '../../redux/actions/asyncActions/studentAsync';

const StudentPage = ({ students, studentsData, loading = 'false' }) => {

  const handleDelete = (item) => {
    axiosAPI
      .delete('student/' + item.id)
      .then((response) => {
        if (response.status === 204) {
          alert("Objeto eliminado satisfactoriamente");
        }
      }).catch((error) => {
        alert(error.response)
      })
  }

  useEffect(() => {
    studentsData();
  }, [studentsData]);

  return (
    <StudentsList
      students={students}
      handleDelete={handleDelete}
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
  studentsData: () => dispatch(getStudentsAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(StudentPage);

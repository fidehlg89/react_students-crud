import React, { useEffect, useState } from "react";
import StudentsList from "./StudentsList";
import axiosAPI from "./../../service/api";

const StudentPage = () => {
  const [students, setStudents] = useState([]);
  const [loading, isLoading] = useState(true);

  const getStudents = () => {
    axiosAPI
      .get('student')
      .then((response) => {
        var data = response.data;
        setStudents(data);
        isLoading(false);
      }).catch((error) => {
        alert(error.response)
      })
  }

  const handleDelete = (item) => {
    axiosAPI
      .delete('student/' + item.id)
      .then((response) => {
        if (response.status === 204) {
          alert("Objeto eliminado satisfactoriamente");
          getStudents();
        }
      }).catch((error) => {
        alert(error.response)
      })
  }

  useEffect(() => {
    getStudents();
  }, [])

  return (
    <StudentsList
      students={students}
      handleDelete={handleDelete}
      loading={loading}
    />
  )
}

export default StudentPage;
import React, { useEffect, useState } from "react";
import GroupsList from "./GroupsList";
import axiosAPI from "./../../service/api";

const GroupPage = () => {
  const [groups, setGroups] = useState([]);
  const [loading, isLoading] = useState(true);

  const getGroups = () => {
    axiosAPI
      .get('Group')
      .then((response) => {
        var data = response.data;
        setGroups(data);
        isLoading(false);
      }).catch((error) => {
        alert(error.response)
      })
  }

  const handleDelete = (item) => {
    axiosAPI
      .delete('Group/' + item.id)
      .then((response) => {
        if (response.status === 204) {
          alert("Objeto eliminado satisfactoriamente");
          getGroups();
        }
      }).catch((error) => {
        alert(error.response)
      })
  }

  useEffect(() => {
    getGroups();
  }, [])

  return (
    <GroupsList
      groups={groups}
      handleDelete={handleDelete}
      loading={loading}
    />
  )
}

export default GroupPage;
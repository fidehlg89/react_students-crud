import React, {useEffect} from "react";
import GroupsList from "./GroupsList";
import { connect } from 'react-redux';
import { getGroupsAsync, deleteGroupAsync } from '../../redux/actions/asyncActions/groupAsync'

const GroupPage = ({groups, groupsData, deleteGroup, loading='false'}) => {

  useEffect(() => {
    groupsData();
  }, [groupsData]);

  return (
    <GroupsList
      groups={groups}
      onDelete={deleteGroup}
      loading={loading}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    groups: state.groups.data
  }
}

const mapDispatchToProps = (dispatch) => ({
  groupsData: () => dispatch(getGroupsAsync()),
  deleteGroup: (item) => dispatch(deleteGroupAsync(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupPage);
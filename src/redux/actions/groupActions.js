import {
  GET_GROUP, GET_GROUP_SUCCESS, GET_GROUPS, GET_GROUPS_SUCCESS, COUNT_GROUPS,
  DELETE_GROUP, DELETE_GROUP_SUCCESS, DELETE_GROUP_FAILURE
} from "./actionTypes";

// to get the especifict STUDENT
export const getGroup = () => {
  return {
    type: GET_GROUP
  }
}

// to get the especifict STUDENT
export const getGroupSuccess = (item) => {
  return {
    type: GET_GROUP_SUCCESS,
    payload: {
      item
    }
  }
}

// to get the list of STUDENTs
export const getGroups = () => {
  return {
    type: GET_GROUPS
  }
}

// to get the list of STUDENTs
export const getGroupsSuccess = (data) => {
  return {
    type: GET_GROUPS_SUCCESS,
    payload: {
      data
    }
  }
}

// count STUDENTs
export const countGroups = (count) => {
  return {
    type: COUNT_GROUPS,
    payload: {
      count
    }
  }
}

// delete STUDENT
export const deleteGroup = (data) => {
  return {
    type: DELETE_GROUP,
    payload: data
  }
}

// STUDENT delete success
export const deleteGroupSuccess = data => {
  return {
    type: DELETE_GROUP_SUCCESS,
    payload: {
      data
    }
  }
}

// STUDENT delete failture
export const deleteGroupFailure = error => {
  return {
    type: DELETE_GROUP_FAILURE,
    payload: {
      error
    }
  }
}
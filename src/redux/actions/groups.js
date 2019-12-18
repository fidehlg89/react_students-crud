import { createAction } from 'redux-actions';

export const createGroup = createAction('createGroup');
export const createGroupSuccess = createAction('createGroupSuccess');
export const createGroupFailure = createAction('createGroupFailure');

export const deleteGroup = createAction('deleteGroup');
export const deleteGroupSuccess = createAction('deleteGroupSuccess');
export const deleteGroupFailure = createAction('deleteGroupFailure');

export const updateGroup = createAction('updateGroup');
export const updateGroupSuccess = createAction('updateGroupSuccess');
export const updateGroupFailure = createAction('updateGroupFailure');

export const patchGroup = createAction('patchGroup');
export const patchGroupSuccess = createAction('patchGroupSuccess');
export const patchGroupFailure = createAction('patchGroupFailure');

export const getGroup = createAction('getGroup');
export const getGroupSuccess = createAction('getGroupSuccess');
export const getGroupFailure = createAction('getGroupFailure');

export const getAllGroups = createAction('getAllGroups');
export const getAllGroupsSuccess = createAction('getAllGroupsSuccess');
export const getAllGroupsFailure = createAction('getAllGroupsFailure');
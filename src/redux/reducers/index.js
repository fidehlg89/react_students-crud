import { combineReducers } from 'redux';
import students from './Students';
import groups from './Groups';

// to combine all reducers together
const appReducer = combineReducers({
    students,
    groups
});

export default appReducer;
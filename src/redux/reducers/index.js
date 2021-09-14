import { combineReducers } from 'redux';
import students from './Student';

// to combine all reducers together
const appReducer = combineReducers({
    students
});

export default appReducer;
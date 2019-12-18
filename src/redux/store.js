import {
  createStore as createReduxStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import students from './reducers/students';
import studentsSaga from './sagas/students';

import groups from './reducers/groups';
import groupsSaga from './sagas/groups';

export const createStore = (initialState) => {
  const reducer = combineReducers({
    groups,
  });

  const sagaMiddleware = createSagaMiddleware();
  const store = createReduxStore(reducer, initialState, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(studentsSaga);  
  sagaMiddleware.run(groupsSaga);

  return store;
};
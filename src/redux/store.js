import {
  createStore as createReduxStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import students from './reducers/students';
import studentsSaga from './sagas/students';

export const createStore = (initialState) => {
  const reducer = combineReducers({
    students,
  });

  const sagaMiddleware = createSagaMiddleware();
  const store = createReduxStore(reducer, initialState, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(studentsSaga);

  return store;
};
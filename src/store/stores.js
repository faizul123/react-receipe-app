import { createStore, applyMiddleware,compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import reducer from '../reducer';
import rootSaga from '../saga/sagas';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = compose(
    applyMiddleware(
      sagaMiddleware, createLogger()
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  const store = createStore(reducer,enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
};
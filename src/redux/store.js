import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootSaga from './sagas';
import rootReducer from './reducers';
const sagaMiddleware = createSagaMiddleware();
export default createStore(rootReducer, applyMiddleware(sagaMiddleware, createLogger()));
sagaMiddleware.run(rootSaga);

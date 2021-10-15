import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from 'redux';
import { ClientReducer } from '../reducer';
export const sagaMiddleware = createSagaMiddleware();
export const store = createStore(ClientReducer, applyMiddleware(sagaMiddleware));


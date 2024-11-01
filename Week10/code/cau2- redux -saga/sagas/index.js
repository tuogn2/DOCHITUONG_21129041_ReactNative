// src/sagas/index.js
import { all, fork } from 'redux-saga/effects';
import jobSaga from './jobSaga';

export default function* rootSaga() {
  yield all([
    fork(jobSaga),
  ]);
}

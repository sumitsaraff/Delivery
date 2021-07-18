import {fork, all} from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registerSaga from './registerSaga';
import restaurantsSaga from './restaurantsSaga';
import locationSaga from './locationSaga';

export default function* rootSaga() {
  yield all([fork(loginSaga)]);
  yield all([fork(registerSaga)]);
  yield all([fork(restaurantsSaga)]);
  yield all([fork(locationSaga)]);
}

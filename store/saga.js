import { all, put, takeLatest } from 'redux-saga/effects';
import es6promise from 'es6-promise';
import 'isomorphic-unfetch';
import { actionTypes, failure, loadDataSuccess } from './actions';

es6promise.polyfill();

const APIs = {
  global: 'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json',
  testimonial: 'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json',
  configurator: 'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json'
};

const successActionTypes = {
  global: actionTypes.GLOBAL_SUCCESS,
  testimonial: actionTypes.TESTIMONIAL_SUCCESS,
  configurator: actionTypes.CONFIGURATOR_SUCCESS
};

function* loadData(api, actionType) {
  try {
    const response = yield fetch(api);
    const data = yield response.json();
    yield put(loadDataSuccess(data, actionType));
  } catch (err) {
    yield put(failure(err));
  }
}

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.LOAD_GLOBAL, loadData(APIs.global, successActionTypes.global)),
    takeLatest(
      actionTypes.LOAD_TESTIMONIAL,
      loadData(APIs.testimonial, successActionTypes.testimonial)
    ),
    takeLatest(
      actionTypes.LOAD_CONFIGURATOR,
      loadData(APIs.configurator, successActionTypes.configurator)
    )
  ]);
}

export default rootSaga;

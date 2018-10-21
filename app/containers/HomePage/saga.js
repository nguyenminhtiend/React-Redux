/**
 * Gets the repositories of the user from Github
 */

import {
  call,
  put,
  select,
  takeLatest,
  all,
  takeEvery
} from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';
import { DO_LOAD_QUOTATION } from './constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';
import { loadQuotation } from './actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';

export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

const testData = {
  message: 'test'
};

const api = ms => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(testData);
    }, ms);
  });
};

export function* loadQuotations() {
  try {
    const data = yield call(api, 300);
    yield put(loadQuotation(data));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  yield all([
    takeLatest(LOAD_REPOS, getRepos),
    takeEvery(DO_LOAD_QUOTATION, loadQuotations)
  ]);
}

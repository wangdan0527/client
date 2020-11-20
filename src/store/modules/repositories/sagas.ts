import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadFilterFailure, loadFilterSucess, loadJobsFailure, loadJobsSucess } from './actions';

export function* loadFilters() {
  try {
    const response = yield call(api.get, '5fb811aea825731fc0a07308');
    yield put(loadFilterSucess(response.data));
  } catch(error) {
    yield put(loadFilterFailure());
  }
}
export function* loadJobs() {
  try {
    const response = yield call(api.get, '5fb81194a825731fc0a07303');
    yield put(loadJobsSucess(response.data));
  } catch(error) {
    yield put(loadJobsFailure());
  }
}
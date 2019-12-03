import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';

import {
  createSuccess,
  createFailure,
  setFamiliesSuccess,
  joinFailure,
  joinFamilySuccess,
} from './actions';

export function* createFamily({ payload }) {
  try {
    const { name } = payload;
    const response = yield call(api.post, 'family', {
      name,
    });

    const { id } = response.data.family;

    yield put(createSuccess(id, name));
  } catch (error) {
    yield put(createFailure());
    Alert.alert('Opss!!! ', error.response.data.error);
  }
}

export function* joinFamily({ payload }) {
  try {
    const { key } = payload;

    const response = yield call(api.post, 'familymember', {
      key,
    });

    const family = response.data;
    yield put(joinFamilySuccess(family));
  } catch (error) {
    yield put(joinFailure());
    Alert.alert('Opss!!! ', error.response.data.error);
  }
}

export function* setFamilies({ payload }) {
  try {
    if (!payload.user.profile) {
      return;
    }
    const { id } = payload.user.profile;
    const response = yield call(api.get, `family`, {
      params: {
        userId: id,
      },
      timeout: 10000,
    });

    const families = response.data;

    yield put(setFamiliesSuccess(families));
  } catch (error) {
    Alert.alert('Opss!!! ', error.message);
  }
}

export default all([
  takeLatest('@family/JOIN_FAMILY_REQUEST', joinFamily),
  takeLatest('persist/REHYDRATE', setFamilies),
  takeLatest('@family/CREATE_REQUEST', createFamily),
]);

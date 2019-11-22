import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';

import { createSuccess, setFamiliesSuccess } from './actions';

export function* createFamily({ payload }) {
  try {
    const { name } = payload;
    const response = yield call(api.post, 'family', {
      name,
    });

    const { id } = response.data.family;

    yield put(createSuccess(id, name));
  } catch (error) {
    Alert.alert('Opss!!! ', error.response.data.error);
  }
}

export function* setFamilies({ payload }) {
  try {
    const { id } = payload.user.profile;
    const response = yield call(api.get, `family/${id}`);

    const families = response.data;

    yield put(setFamiliesSuccess(families));
  } catch (error) {
    Alert.alert('Opss!!! ', error.response.data.error);
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setFamilies),
  takeLatest('@family/CREATE_REQUEST', createFamily),
]);

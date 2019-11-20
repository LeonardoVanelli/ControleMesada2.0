import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';

import { createSuccess } from './actions';

export function* createFamily({ payload }) {
  try {
    const { name } = payload;
    const response = yield call(api.post, 'family', {
      name,
    });

    const { id } = response.data.family;

    yield put(createSuccess(id, name));
  } catch (error) {
    console.tron.log(error.response.data);
    Alert.alert('Opss!!! ', error.response.data.error);
  }
}

export default all([takeLatest('@family/CREATE_REQUEST', createFamily)]);

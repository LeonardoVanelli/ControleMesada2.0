import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    console.tron.log(api);
    const response = yield call(api.post, 'session', {
      email,
      password,
    });

    const { user, token } = response.data;

    yield put(signInSuccess(token, user));
  } catch (error) {
    yield put(signFailure());
    Alert.alert('Falha no login', 'Verifique os dados informados');
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);

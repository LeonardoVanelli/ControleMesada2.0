import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'session', {
      email,
      password,
    });

    const { user, families, token } = response.data;

    yield put(signInSuccess(token, user, families));
  } catch (error) {
    yield put(signFailure());
    Alert.alert('Falha no login', 'Verifique os dados informados');
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'user', {
      name,
      email,
      password,
    });

    Alert.alert('Cadastro efetuado', 'Faça login');
  } catch (error) {
    Alert.alert('Falha no cadastro', 'Verifique os dados informados');
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP', signUp),
]);

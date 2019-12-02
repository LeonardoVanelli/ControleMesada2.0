import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';
import { navigate } from '../../../services/navigation';

import { signInSuccess, signFailure, signUpSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'session', {
      email,
      password,
    });

    const { user, families, token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user, families));
  } catch (error) {
    yield put(signFailure());
    Alert.alert('Falha no login', 'Verifique os dados informados');
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password, provider } = payload;

    yield call(api.post, 'user', {
      name,
      email,
      password,
      provider,
    });

    yield put(signUpSuccess());
    Alert.alert('Cadastro efetuado', 'Faça login');
    navigate('SignIn');
  } catch (error) {
    yield put(signFailure());
    Alert.alert('Falha no cadastro', error.response.data.error);
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function* onPersist() {
  yield put(signFailure());
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('persist/REHYDRATE', onPersist),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP', signUp),
]);

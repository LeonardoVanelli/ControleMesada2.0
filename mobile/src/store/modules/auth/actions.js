export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user, families) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user, families },
  };
}

export function signUpRequest(name, email, password, provider) {
  return {
    type: '@auth/SIGN_UP',
    payload: { name, email, password, provider },
  };
}

export function signUpSuccess() {
  return {
    type: '@auth/SIGN_UP_SUCCESS',
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}

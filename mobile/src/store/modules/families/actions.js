export function createRequest(name) {
  return {
    type: '@family/CREATE_REQUEST',
    payload: { name },
  };
}

export function createSuccess(id, name) {
  return {
    type: '@family/CREATE_SUCCESS',
    payload: { id, name },
  };
}

export function createFailure() {
  return {
    type: '@family/CREATE_FAILURE',
  };
}

export function setFamiliesSuccess(families) {
  return {
    type: '@family/SET_FAMILIES_SUCCESS',
    payload: { families },
  };
}

export function joinFamilyRequest(key) {
  return {
    type: '@family/JOIN_FAMILY_REQUEST',
    payload: { key },
  };
}

export function joinFamilySuccess(family) {
  return {
    type: '@family/JOIN_FAMILY_SUCCESS',
    payload: { family },
  };
}

export function joinFailure() {
  return {
    type: '@family/JOIN_FAILURE',
  };
}

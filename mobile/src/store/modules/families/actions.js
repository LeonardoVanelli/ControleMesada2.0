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

export function setFamiliesSuccess(families) {
  return {
    type: '@family/SET_FAMILIES_SUCCESS',
    payload: { families },
  };
}

import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  loading: false,
  loadingCreate: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.data = action.payload.families;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.data = [];
        break;
      }
      case '@family/CREATE_REQUEST': {
        draft.loadingCreate = true;
        break;
      }
      case '@family/CREATE_SUCCESS': {
        draft.data.push(action.payload);
        draft.loadingCreate = false;
        break;
      }
      case '@family/CREATE_FAILURE': {
        draft.loadingCreate = false;
        break;
      }
      case '@family/SET_FAMILIES_SUCCESS': {
        draft.data = action.payload.families;
        draft.loading = false;
        break;
      }
      case 'persist/REHYDRATE': {
        draft.loading = true;
        break;
      }
      default:
    }
  });
}

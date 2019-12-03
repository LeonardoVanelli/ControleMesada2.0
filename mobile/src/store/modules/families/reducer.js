import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  loading: false,
  loadingCreate: false,
  loadingJoin: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.data = action.payload.families;
        draft.loading = false;
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
      case '@family/JOIN_FAMILY_REQUEST': {
        draft.loadingJoin = true;
        break;
      }
      case '@family/JOIN_FAMILY_SUCCESS': {
        draft.loadingJoin = false;
        draft.data.push(action.payload.family);
        break;
      }
      case '@family/JOIN_FAILURE': {
        draft.loadingJoin = false;
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

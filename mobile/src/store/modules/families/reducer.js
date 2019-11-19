import produce from 'immer';

const INITIAL_STATE = {
  families: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.families = action.payload.families;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.families = [];
        break;
      }
      default:
    }
  });
}

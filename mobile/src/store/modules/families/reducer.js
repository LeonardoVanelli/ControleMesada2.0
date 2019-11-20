import produce from 'immer';

const INITIAL_STATE = {
  data: [],
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
      case '@family/CREATE_SUCCESS': {
        console.tron.log(action.payload);
        draft.data.push(action.payload);
        break;
      }
      default:
    }
  });
}

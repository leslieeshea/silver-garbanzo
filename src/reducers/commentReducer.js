import { CREATE_COMMENT } from '../actions/comments/commentActions';

export default function reducer(state = {}, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        [action.payload.memeId]: [...(state[action.payload.memeId] || []), action.payload.comment]
      };
    default:
      return state;
  }
}

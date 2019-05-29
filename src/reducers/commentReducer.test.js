import reducer from './commentReducer';
import { createComment } from '../actions/comments/commentActions';

describe('comment reducer', () => {
  it('returns an empty onject on initialization', () => {
    const newState = reducer(undefined, {
      type: '@@INIT'
    });

    expect(newState).toEqual({});
  });

  it('handles the create comment action', () => {
    const newState = reducer({}, createComment(1, 'hihihi'));

    expect(newState).toEqual(
      { 1: ['hihihi'] }
    );
  });
});

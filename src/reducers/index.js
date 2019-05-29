import { combineReducers } from 'redux';
import memes from './memesReducer';
import comments from './commentReducer';

export default combineReducers({
  memes,
  comments
});

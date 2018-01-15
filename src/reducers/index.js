import { combineReducers } from 'redux';
import ReducerBooks from './ReducerBooks';
import ReducerActiveBook from './ReducerActiveBook';

const rootReducer = combineReducers({
  books: ReducerBooks,
  activeBook: ReducerActiveBook
});

export default rootReducer;
import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

import ActiveBook from './reducer_active_book';

// We need to wire our reducer to our application.
// This is where we do it
// Function to map our state

// Any key that we provide to the combineReducer ends up as a key on
// our global state
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook : ActiveBook
});

export default rootReducer;

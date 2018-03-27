import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// We need to wire our reducer to our application.
// This is where we do it
// Function to map our state
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;

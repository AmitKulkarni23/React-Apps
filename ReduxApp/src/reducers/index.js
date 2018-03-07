import { combineReducers } from 'redux';

// Importing the BooksReducer here
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
    // Setting the value returned bhy the hbooks reducer
    // to the key books here
    books: BooksReducer

});

export default rootReducer;

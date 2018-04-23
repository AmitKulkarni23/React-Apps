// Creating action creators
// An action creator is a function and nothing else

// An action(object) is returned from the action creator
// An action usually has the following parts:
// type - the type of the action

// payload - info regarding the action

export function selectBook(book){
    // console.log("Book selected is ", book.title);
    // selectBook is an action creator
    // needs to return an action
    return {
      type: 'BOOK_SELECTED',
      payload: book
    };
}

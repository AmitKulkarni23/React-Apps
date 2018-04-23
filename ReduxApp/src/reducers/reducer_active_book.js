// All reducers get 2 arguments
// The current state and the action

// Reducers are only ever called when an action occurs
// State - argument is not the application state
// but only the state this reducer is responsible for
export default function(state = null, action){
  // If we dont care about the action, just pass the current state back through
  // base case

  // Redux under the hood throws out some actions by default while it is warming up


  switch(action.type){
    case 'BOOK_SELECTED':
      // DONT EVER MUTATE THE STATE
      // Just return a fresh object every time
      return action.payload;
  }


  return state
}

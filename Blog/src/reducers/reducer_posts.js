// Export the type of the action
import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions';

// Import lodash - take array of records and create a objects out of it
// Use loadsh's mapKeys functionality
import _ from 'lodash';


// Defaulting the state to be an empty object initially {}
export default function(state = {}, action){
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_POST:
      // Ultimately our state is an object
      // There might be some posts that we already fetched
      // We dont want to re-fetch these posts again
      // We want to add to these posts
      const post = action.payload.data;
      const newState = {...state };
      newState[post.id] = post;
      return newState;

      // return { ...state,[action.payload.data.id]: action.payload.data}
    case DELETE_POST:
      // We have the ID of the post that has to be deleted
      // We can use lodash's omit function to remove this post id from our
      // application state
      return _.omit(state, action.payload);

      // Look at the state object and look at the key(action.payload)
      // then just drop that item
    default:
      return state;
  }
}

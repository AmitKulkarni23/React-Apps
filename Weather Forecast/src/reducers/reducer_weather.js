import { FETCH_WEATHER } from '../actions/index';
// Reducers are just functions

// Since users can query for multiple cities, it makes sense to store the data
// in the form of an array. Therefore our initial state is an empty array

export default function(state = [], action){

  switch(action.type){
    // We need to handle only actions of type FETCH_WEATHER
    case FETCH_WEATHER:
      // handle the payload
      // DONT DO THE BELOW
      //return state.push(action.payload.data);
      // We need to create a new array completely

      // Concat doesn't change the existing array but creates a new array
      //return state.concat([action.payload.data]);

      // ES6 style
      return [action.payload.data, ...state];
  }

  return state;
}

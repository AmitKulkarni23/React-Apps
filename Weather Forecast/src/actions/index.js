import axios from 'axios';

const API_KEY='5daaa7f52939b28022c0a356ccd9458d';

// We will only change our application state through our reducers and
// actions

// Therefore to load our weather data we need to dispatch an action creator
// and perform an Ajax request

// An action creator has to return an action and an action always
// has to return a type

export const FETCH_WEATHER = 'FETCH_WEATHER';

// The URL
const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city){
  // Whenever the fetchWeather API is called, it is passed in the seacrh city name
  const url = `${ROOT_URL}&q=${city},us`;


  console.log("The final url is " + url);
  // Use the axios library
  // This axios library returns a promise
  const request = axios.get(url);
  console.log("The request returned is " + request);

  return{
    type: FETCH_WEATHER,
    payload: request
  };
}

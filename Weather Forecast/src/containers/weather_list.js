import React, { Component } from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{
  renderWeather(cityData){
    const cityName = cityData.city.name;

    // The below lines will give us a list of temperatures for the city
    const tempList = cityData.list.map(weather => weather.main.temp);

    // get humidity in a list
    const humidityList = cityData.list.map(weather => weather.main.humidity);

    // get pressure
    const pressureList = cityData.list.map(weather => weather.main.pressure);

    // const lon = cityData.city.coord.lon;
    // console.log("Longitude is ", lon);
    //
    // const lat = cityData.city.coord.lat;
    // console.log("Latitude is ", lat);

    return (
      // Adding a key for each element in the array so that we dont
      // get the React warning
      <tr key={cityName}>
        <td>{cityName}</td>
        <td>
          <Chart color="green" data={tempList} units="K"/>
        </td>
        <td>
          <Chart color="red" data={pressureList} units="hPa"/>
        </td>
        <td>
          <Chart color="black" data={humidityList} units="%"/>
        </td>
      </tr>
    )
  }

  render(){
    return(
      // Need to render a table
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>

    );
  }
}


function mapStateToProps(state){
  return {weather : state.weather};
}

export default connect (mapStateToProps) (WeatherList);

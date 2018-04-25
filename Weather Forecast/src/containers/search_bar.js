import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);

    // Initializing the state for the Search bar
    // The search bar is a controlled component
    // It is a form element where teh value of the input is set by the state
    // of our component

    this.state = {term : ""};

    // Binding the event handler

    // So the below line translates to something like this
    // Bind the function onInputChange to this component/class and
    //replace that by the bound instance this.onInputChange
    this.onInputChange = this.onInputChange.bind(this);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // All DOM events such as onClick, onHover, onChange take an event object as
  // parameter
  onInputChange(event){
    // Whenever the user changes the input in the search bar,
    // this function is called

    // So we are calling this function directly from the onChange in
    // the search bar. Therefore the value of "this" is not our component
    // SearchBar."this" is a mystery component. It has an incorrect context
    // Therefore, we get an undefined error

    // How to solve this?
    // bind this event handler in the constructor
    this.setState({term : event.target.value});

  }


  onFormSubmit(event){

    // We need to fetch weather data
    event.preventDefault();
    // We need to connect our SearchBar component with our Redux using the
    // connect method

    // We can use this event object to prevent form submission

    this.props.fetchWeather(this.state.term);
    this.setState({term : ""});
  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your fav cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}


function mapDisptachToProps(dispatch){

  // This causes the action that is created from the action creator
  // to flow through the middleware and the reducer
  return bindActionCreators({ fetchWeather }, dispatch);
}

// We are just passing in null as the first argument because
// we do not want redux to care about the state
export default connect(null, mapDisptachToProps)(SearchBar);

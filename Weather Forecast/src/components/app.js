import React, { Component } from 'react';

// Importing teh SeacrhBar component
import SearchBar from '../containers/search_bar';


export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

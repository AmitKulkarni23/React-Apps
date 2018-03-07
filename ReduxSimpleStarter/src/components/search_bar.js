// User types input we need to make a request
// to Youtube API

import React, {Component} from 'react';


// Creating a class-based component
// Even a class-based component should have a render method
class SearchBar extends Component{

    constructor(props){
        // All js classes have a special function called
        // constructor. Reserved for doing some setup in our class

        // Super class Component's constructor
        super(props);

        // Whenever we use state, we need to create a new object an assigning
        // it to this.state.Object will contain properties that we
        // want to record
        this.state = {term : ''};
    }

    render(){
        // This should be present in every class-based component
        // return <input onChange={this.onInputChange}/>;

        // ES6 fat-arrow
        return (
         <div className="search-bar">
         <input
         value={this.state.term}
         onChange={event => this.onInputChange(event.target.value)} />
         </div>
     )
    }

    onInputChange(term){
        // Whenever the input changes, run the code here
        // event handlers are always called with an event object
        // event object has got many properties
        this.setState({term});
        this.props.onSearchTermChange(term);

    }
}


// We have to return a reference to the index.js file so that it is displayed
// Export statements

export default SearchBar;

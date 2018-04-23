import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component{
  render(){
    // Initial state is null
    // Adding a null check for state here
    if(! this.props.book){
      return (
        <div>
          Select a book whose details you want to see
        </div>
      )
    }

    return (
      <div>
        <h3>Details For:</h3>
        <div>Title : {this.props.book.title}</div>
        <div># of Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  // Takes our application state as the argument
  // And whatever gets returned from here will show up as props
  // inside of BookDetail(our Container)
  // Usually we return an object from here

  // Whatever gets returned from here is set to props

  // Whenever our state changes, this container will instantly re-render

  return {
    book : state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);

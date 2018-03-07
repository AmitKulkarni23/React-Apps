// Purpose - Render a list of books
import React, {Component} from 'react';

// Importing the react-redux library
import { connect } from 'react-redux';

class BookList extends Component{
    renderList(){
        return this.props.books.map((book) => {
            // For each element in the array return a li
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }

    render(){
        return (
            <ul className="list-group col-sm-4">
             {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    // Function that will map state to props by using the
    // react-redux library

    // Whatever is returned from here will show up as props in BookList

    // Takes application state and maps it to the props

    // if our state ever changes, the conatiner will automatically
    // re-render with the new list of books
    return  {
        books: state.books
    };

}

// We want to export the container not just the Component
// connect - takes a function and a component and producesa a container
export default connect(mapStateToProps)(BookList);

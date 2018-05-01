import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';

import {createPost} from '../actions';

// reduxForm - is a function. Similar to connect() from Redux
class PostsNew extends Component{

  renderField(field){
    // Should return some amount of JSX
    // field - object - contains some event handlers that we need
    // to wire up to some JSX that we are returning

    // field.input - is an object that contains a lot of different events
    // like onChange, onBlur, onFocus etc..

    // Instead of
    //onChange = field.input.onChange
    //onBlur= field.input.onBlur use
    // ...field.input

    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger': ''}`

    return(
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ""}
        </div>
      </div>
    )

  }

  onSubmit(values){
    // values is the values from the form
    //console.log(values);
    // this.props.history.push('/');
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render(){

    // Pulling off property from props object
    // The handleSubmit is an additional property that is added by the
    // reduxForm below - handleSubmit is one of them

    // redux-form is not responsible for form submittals
    // handleSubmit takes a function that we define to actually submit

    // Calling bind() because the callback will be called outside the context
    const {handleSubmit} = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="title"
          component={this.renderField}
          label="Title"
        />
        <Field
          name="categories"
          component={this.renderField}
          label="Categories"
        />
        <Field
          name="content"
          component={this.renderField}
          label="Post Content"
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values){
  // Whenever the user tries to submit a form
  // values is an object that contains all the
  // console.log(values);
  // {title : 'asdf', categories : 'asdf', content : 'asdf'}
  const errors = {};

  // Validate the inputs from teh 'values' object
  if(!values.title){
    // Can add on additional properties to check using || or &&
    errors.title = "Enter a title";
  }

  if(!values.categories){
    errors.categories = "Enter some categories";
  }

  if(!values.content){
    errors.content = "Enter some content";
  }
  // If we return an empty object then the form is completely fine
  // If errors has any properties then the form is invalid
  return errors;
}


// reduxForm is similar to the connect function
export default reduxForm({
  // takes different config options
  // name of the form is the key here
  validate: validate,
  form : 'PostsNewForm'
})(
  connect(null, {createPost})(PostsNew)
);

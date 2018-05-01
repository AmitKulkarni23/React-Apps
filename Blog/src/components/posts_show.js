import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions';
import {Link} from 'react-router-dom';

class PostsShow extends Component{

  componentDidMount(){
    // Function is called immediately after this component is shown up in the DOM
    // Initiate some one time loading things

    // params object will contain all the wildcards present
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick(){
    // We want to call an action creator
    // Because we are deleting a post
    const { id } = this.props.match.params;
    this.props.deletePost(id, () =>{
      this.props.history.push('/');
    });
  }

  render(){
    //console.log("Props are ", this.props);
    const {post} = this.props;

    if(!post){
      return <div>Loading...</div>;
    }
    //
    // console.log("Props are ", this.props);
    //
    // console.log(post);
    return(
      <div>
        <Link to="/">Back to Home Page</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h5>Categories : {post.categories}</h5>
        <p>
          {post.content}
        </p>
      </div>
    );
  }
}


function mapStateToProps({posts}, ownProps){
  // The component clearly cares about only 1 post
  // Not the entire posts array

  // ownProps - is the props object that is headed to the above component
  // Now we can return a single post in here
  return {post : posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPost, deletePost}) (PostsShow);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import _ from 'lodash';

// Link is almost identical to teh anchor tag
import {Link} from 'react-router-dom';

class PostsIndex extends Component{

  componentDidMount(){
    // Function is called immediately after this component is shown up in the DOM
    // Initiate some one time loading things
    this.props.fetchPosts();
  }


  renderPosts(){
    // The helper function
    // Map over our list of posts and create an <li> for each post
    // We cannot use the classic map function here because it is not an array but
    // instead is an object
    // But we can use lodash's map function here
    return _.map(this.props.posts, post => {
      return(
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      );
    });
  }
  render(){
    // console.log(this.props.posts);
    return(
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Click to add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { posts : state.posts};
}

// Will give us this.props.fetchPosts in pur component
// Used as an alternative to mapDispatch function
export default connect(mapStateToProps, {fetchPosts : fetchPosts})(PostsIndex);

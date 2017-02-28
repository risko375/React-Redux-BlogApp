import React, { Component } from 'react';
import { connect } from 'react-redux';

// import action creator
import { fetchPosts } from '../actions/index';

// import Link component to enable navigation between routes
import { Link } from 'react-router';


// PostIndex component shows all posts to the user
class PostsIndex extends Component {
    
    // call fetchPosts to load posts when component about to be rendered to DOM
    componentWillMount(){
    
        this.props.fetchPosts();
    }
    
    // create render method to show list of blog posts and allow navigation to individual post using Link tag
    renderPosts() {
    
        return this.props.posts.map((post) => {
        
            return (
            
                <li className="list-group-item" key={post.id}>
                  <Link to={"posts/" + post.id}>
                    <span className="pull-xs-right">{post.categories}</span>
                    <strong>{post.title}</strong>
                  </Link>            
                </li>
            );
        });
    }

    render() {
    
        return(
          <div>
            <div className="text-xs-right">
             <Link to="/posts/new" className="btn btn-primary">
                Add a Post 
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

// give component access to state i.e all posts
function mapStateToProps(state){

    return { posts: state.posts.all };
}

// connect component to application state to gain accesss to all posts and fetchPosts action creator
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// import action creators
import { fetchPost, deletePost } from '../actions/index';
// import Link component for navigation
import { Link } from 'react-router';

// create PostsShow class component to show an individual post
class PostsShow extends Component {
    
    // gain access to router property through context
    static contextTypes = {
    
        router: PropTypes.object
    };
        

    // use lifecycle method to call fetchPost to get single blog post - passing in post id from url 
    componentWillMount() {
    
        this.props.fetchPost(this.props.params.id);
    }
    
    //  onDeleteClick calls deletePost action creator passing post id and chains
    //  on router method push to return user to index page once post deleted

    onDeleteClick(){
    
        this.props.deletePost(this.props.params.id)
            .then(() => { this.context.router.push('/'); });
    }

    render() {
        
        const {post} = this.props;
        
        // show user 'Loading...' spinner while data loading
        if(!post){
        
            return <div>Loading...</div>;
        }
    
        return (
            <div>
                <Link to="/">Back to Index</Link>
                <button 
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}>
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

// give component access to state specifically active post
function mapStateToProps(state){

    return { post: state.posts.post }
}

// connect component to state and action creators, making PostsShow a 'container' component
export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);


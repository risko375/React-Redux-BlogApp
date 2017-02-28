import React, { Component, PropTypes } from 'react';

// import reduxForm to manage new post form 
import { reduxForm } from 'redux-form';

// import action creator 
import { createPost } from '../actions/index';

// import Link component to enable navigation between routes
import { Link } from 'react-router';

// defining an object on PostsNew class - giving access to this.context.router inside component
class PostsNew extends Component {
    
    static contextTypes = {
    
        router: PropTypes.object
    };

    // props are from form
    onSubmit(props){
    
        this.props.createPost(props)
         .then(() => {
        
            //blog post has been created, navigate the user to the index
            //Navigate by calling this.context.router.push with 
            //the new path to navigate to
            this.context.router.push('/');
        });
    }

    render() {
        
        const { fields: { title, categories, content }, handleSubmit } = this.props; 
            // non es6 version is: const handleSubmit = this.props.handleSubmit
            
    
        return(
        
            
            // create new post form
            // onSubmit call the onSubmit function binding context to 'this'
           <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
           
            <h3>Create a New Post</h3>
            
            <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                <label>Title</label>
                <input type="text" className="form-control" {...title} />
                <div className="text-help">
                    {title.touched ? title.error : '' }
               </div>
            </div>
            
            <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                <label>Categories</label>
                <input type="text" className="form-control" {...categories} />
                 <div className="text-help">
                    {categories.touched ? categories.error : '' }
                </div>
            </div>
            
            <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                <label>Content</label>
                <textarea className="form-control" {...content} />
                 <div className="text-help">
                    {content.touched ? content.error : '' }
                </div>
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/" className="btn btn-danger">Cancel</Link>

            </form>
        )
 
        
    }
}

// form validation function

function validate(values){

    const errors = {};
    
    if(!values.title){
    
        errors.title = 'Enter a username';
    }
    
    if(!values.categories){
    
        errors.categories = 'Enter categories';
    }
    
    if(!values.content) {
    
        errors.content = 'Enter some content';
    }
    
    return errors;
}


// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProp, 3rd is mapDispatchToProps


export default reduxForm({

    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content'], validate
},null, { createPost })(PostsNew);
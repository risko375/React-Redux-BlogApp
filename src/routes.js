import React from 'react';
// import react-router components
import { Route, IndexRoute } from 'react-router';


// import app components
import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';


// configure routes to tell router what components to render to screen
// for a specific url

export default (

    <Route path="/" component={App} > 
     <IndexRoute component={PostsIndex} />
     <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostsShow} />
    </Route>
);
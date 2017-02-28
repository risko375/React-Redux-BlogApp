// import axios library for ajax call
import axios from 'axios';

// save action types as const and export to allow reducers to import
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

// set root url and api key as const
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=twelve1212';

// create fetchPosts to make api call and return promise as payload, which redux-promise will handle
export function fetchPosts() {
    
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
    
        type: FETCH_POSTS,
        payload: request
        
    };

}
  
// create an action creator to create a new post
export function createPost(props){

    const request = axios.post(`${ROOT_URL}/posts/${API_KEY}`, props);
    
    return {
    
        type: CREATE_POST,
        payload: request
    };
}
    
// create an action creator to fetch a specific post selected by user    
export function fetchPost(id){

    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    
    return {
    
        type: FETCH_POST,
        payload: request
    };
}
    
// create an action creator to delete selected post    
export function deletePost(id){

    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
    
    return {
    
        type: DELETE_POST,
        payload: request
    };
}
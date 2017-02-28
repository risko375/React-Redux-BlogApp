// import action types

import { FETCH_POSTS, FETCH_POST } from '../actions/index';

// app has two pieces of state, all posts and the active post
const INITIAL_STATE = { all: [], post: {} };

export default function (state = INITIAL_STATE, action ) {

    switch(action.type) {
        case FETCH_POST: 
            return { ...state, post: action.payload.data };
        case FETCH_POSTS:
            return { ...state, all: action.payload.data };
            
        default:
            return state;
    
    
    }
}
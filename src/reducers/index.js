// Imports
import { combineReducers } from 'redux';
import ReducerPosts from './ReducerPosts';
import ReducerActivePost from './ReducerActivePost';

// Root Reducer
const RootReducer = combineReducers({
	posts:ReducerPosts,
	activePost:ReducerActivePost
});

// Export
export default RootReducer;
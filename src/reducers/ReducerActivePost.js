// ActionsTypes
import { ACTION_TYPES_POSTS } from '../actions/ActionTypes';

// Fonction reducer
const ReducerActivePost = (state = {}, action) => {

	// Lire tous les posts
	if (action.type === ACTION_TYPES_POSTS.READ_POST){
		return action.payload;
	};

	// Default
	return state;

};

// Export
export default ReducerActivePost;
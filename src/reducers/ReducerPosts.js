// ActionsTypes
import { ACTION_TYPES_POSTS } from '../actions/ActionTypes';

// Fonction reducer
const ReducerPosts = (state = [], action) => {

	/* !!! Ici pas de d'initial state de type :
	initialState = {
		posts:[]
	}; 
	Il faut donc toujours retourner le state dans les actions, 
	et non pas return { ...state, posts:action.payload } */

	// Lire tous les posts
	if (action.type === ACTION_TYPES_POSTS.READ_ALL_POSTS){
		return action.payload;
	};

	// Supprimer un post
	if (action.type === ACTION_TYPES_POSTS.DELETE_POST){
		return state.filter((post) => {
			return post.id !== action.payload;
		});
	};

	// Créer un post
	if (action.type === ACTION_TYPES_POSTS.CREATE_POST){
		return [...state, action.payload];
	}

	// Default
	return state;

};

// Export
export default ReducerPosts;
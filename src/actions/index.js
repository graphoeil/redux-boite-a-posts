// Imports
import axios from 'axios';
import { ACTION_TYPES_POSTS } from './ActionTypes';

// Variables
const END_POINT = 'http://localhost:3000';

// Action creators
//
// Charger les posts
export const readAllPosts = () => {
	// Via Redux-thunk
	return function(dispatch){
		axios.get(`${END_POINT}/posts`).then((response) => {
			dispatch({ type:ACTION_TYPES_POSTS.READ_ALL_POSTS, payload:response.data });
		});
	};
};

// Lire un post
export const readPost = (id) => {
	return async function(dispatch){
		const response = await axios.get(`${END_POINT}/posts/${id}`);
		dispatch({ type:ACTION_TYPES_POSTS.READ_POST, payload:response.data });
	};
};

// Supprimer un post
export const deletePost = (id) => {
	return function(dispatch){
		axios.delete(`${END_POINT}/posts/${id}`).then(() => {
			dispatch({ type:ACTION_TYPES_POSTS.DELETE_POST, payload:id });
		});
	};
};

// Créer un post
export const createPost = (post) => {
	return function(dispatch){
		axios.post(`${END_POINT}/posts/`,{
			title:post.title,
			content:post.content,
			author:post.author
		}).then((response) => {
			dispatch({ type:ACTION_TYPES_POSTS.CREATE_POST, payload:response.data });
		})
	};
};
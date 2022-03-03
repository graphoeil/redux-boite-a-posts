// Imports
import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { readAllPosts, deletePost } from '../actions';
import PostListItem from './PostListItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';

// Fonction
const PostList = ({ readAllPosts, deletePost, posts }) => {

	// State
	const [displayCahouet, setDisplayCahouet] = useState(false);

	// CallbackUseEffect
	const callBackUseEffect = useCallback(() => {
		readAllPosts();
	},[readAllPosts]);
	// Obtenir les posts (didMount)
	useEffect(() => {
		callBackUseEffect();
	},[callBackUseEffect]);

	// Supprimer un post
	const deletePostCallBack = (id) => {
		deletePost(id);
	};

	// Return
	return(
		<div className="m-4">
			<h1>Liste des posts</h1>
			<div className="form-group">
				<input type="checkbox" style={ { marginRight:'10px' } } id="afficheCahouet" checked={ displayCahouet } 
					onChange={ (e) => { setDisplayCahouet(e.target.checked); } }/>
				<label htmlFor="afficheCahouet" style={ { cursor:'pointer' } }>Afficher les posts de Cahouet</label>
			</div>
			<div className="buttonAdd">
				<Link to="/create-post">
					<button className="btn btn-primary btnCircle">
						+
					</button>
				</Link>
			</div>
			<table className="table table-striped">
				<thead>
					<tr>
						<th>Titre</th>
						<th>Action</th>
					</tr>
				</thead>
				<TransitionGroup component="tbody">
					{
						displayCahouet ? posts.filter((post) => {
							return post.author === 'Cahouet';
						}).map((post) => {
							return(
								<CSSTransition timeout={ 500 } key={ post.id } classNames="fade">
									<PostListItem key={ post.id } post={ post } deletePostCallBack={ deletePostCallBack }/>
								</CSSTransition>
							);
						}).reverse() : posts.map((post) => {
							return(
								<CSSTransition timeout={ 500 } key={ post.id } classNames="fade">
									<PostListItem key={ post.id } post={ post } deletePostCallBack={ deletePostCallBack }/>
								</CSSTransition>
							);
						}).reverse()
					}
				</TransitionGroup>
			</table>
		</div>
	);

};

// State (store) vers les props
const mapStateToProps = (state) => {
	/* state.posts car dans reducers/index :
	const RootReducer = combineReducers({
		posts:ReducerPosts
	}); */
	return { posts:state.posts };
};

// Actions (AC) vers les props
const mapDispatchToProps = {
	readAllPosts, deletePost
};

// Export
export default connect(mapStateToProps, mapDispatchToProps)(PostList);
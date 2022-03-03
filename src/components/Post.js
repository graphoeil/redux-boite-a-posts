// Imports
import React, { useCallback, useEffect } from 'react';
import PostContent from './PostContent';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { readPost } from '../actions';

// Fonction
const Post = ({ readPost, post }) => {

	// Variables
	const { id } = useParams();

	// CallBackUseEffect
	const callBackUseEffect = useCallback(() => {
		readPost(id);
	},[readPost, id]);
	// Chargement du post
	useEffect(() => {
		callBackUseEffect();
	},[callBackUseEffect]);

	// Return
	return(
		<div>
			<PostContent post={ post }/>
		</div>
	);

};

// State (store) vers les props
const mapStateToProps = (state) => {
	return { post:state.activePost };
};

// Actions (AC) vers les props
const mapDispatchToProps = {
	readPost
};

// Export
export default connect(mapStateToProps, mapDispatchToProps)(Post);
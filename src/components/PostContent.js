// Imports
import React from 'react';

// Fonction
const PostContent = (props) => {

	// Variables
	const { title, content, author } = props.post;

	// Return
	return(
		<div>
			<h2>{ title }</h2>
			<p>{ content }</p>
			<p>{ author }</p>
		</div>
	);

};

// Export
export default PostContent;
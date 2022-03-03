// Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Fonction
const PostListItem = (props) => {

	// Variables
	const { id, title } = props.post;

	// Supprimer ce post
	const handleDelete = () => {
		props.deletePostCallBack(id);
	};

	// Return
	return(
		<tr>
			<td>
				<Link to={ `/posts/${id}` }>
					{ title }
				</Link>
			</td>
			<td>
				<button className="btn btn-danger" onClick={ handleDelete }>
					Supprimer
				</button>
			</td>
		</tr>
	);

};

// Export
export default PostListItem;
// Imports
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostList from './components/PostList';
import Post from './components/Post';
import PostForm from './components/PostForm';
import Erreur404 from './components/Erreur404';
import './css/style.css';

// Fonction
function App(){

	// Return
	return(
		<Router>
			<Switch>

				{/* Liste des posts */}
				<Route path="/" exact>
					<PostList/>
				</Route>
				{/* Liste des posts */}

				{/* Un post en particulier */}
				<Route path="/posts/:id" exact children={ <Post/> }/>
				{/* Un post en particulier */}

				{/* Formulaire */}
				<Route path="/create-post" exact>
					<PostForm/>
				</Route>
				{/* Formulaire */}

				{/* Error, renvoi vers la liste */}
				<Route path="*">
					<Erreur404/>
				</Route>
				{/* Error */}

			</Switch>
		</Router>
	);

};

// Export
export default App;
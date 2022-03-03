// Imports
import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { createPost } from '../actions';
import { connect } from 'react-redux';

// Fonction
const PostForm = ({ createPost }) => {

	// Autofocus 1st input
	const inputRef = useRef();
	useEffect(() => {
		inputRef.current.focus();
	},[]);

	// Variables
	const history = useHistory();

	// State
	const [title, setTitle] = useState('');
	const [titleValide, setTitleValide] = useState(false);
	const [titleError, setTitleError] = useState('');
	const [content, setContent] = useState('');
	const [contentValide, setContentValide] = useState(false);
	const [contentError, setContentError] = useState('');
	const [author, setAuthor] = useState('Cahouet');
	const [authorValide, setAuthorValide] = useState(true);
	const [authorError, setAuthorError] = useState('');
	const [champEnCours, setChampEnCours] = useState('');
	const [formValide, setFormValide] = useState(false);

	// Input change
	const handleChange = (e) => {
		const champ = e.target.name;
		const valeur = e.target.value;
		if (champ === 'title'){
			setTitle(valeur);
			setChampEnCours('title');
		}
		if (champ === 'content'){
			setContent(valeur);
			setChampEnCours('content');
		}
		if (champ === 'author'){
			setAuthor(valeur);
			setChampEnCours('author');
		}
	};

	// Invocation de valideChamps
	useEffect(() => {
		if (champEnCours === 'title'){
			valideChamps('title', title);
		}
		if (champEnCours === 'content'){
			valideChamps('content', content);
		}
		if (champEnCours === 'author'){
			valideChamps('author', content);
		}
		// eslint-disable-next-line
	},[title, content, author]);

	// Input validation
	const valideChamps = (champ, valeur) => {
		let isTitleValide = titleValide;
		let isContentValide = contentValide;
		let isAuthorValide = authorValide;
		// Input on change
		switch (champ){
			case 'title':
				isTitleValide = valeur.length > 5;
				if (isTitleValide){
					setTitleError('');
				} else {
					setTitleError('Pas assez de caractères...');
				}
			break;
			case 'content':
				isContentValide = valeur.length > 20;
				if (isContentValide){
					setContentError('');
				} else {
					setContentError('Pas assez de contenu...');
				}
			break;
			case 'author':
				isAuthorValide = valeur.length > 5;
				if (isAuthorValide){
					setAuthorError('');
				} else {
					setAuthorError('Pas assez de caractères');
				}
			break;
			default: break;
		}
		// Maj states
		setTitleValide(isTitleValide);
		setContentValide(isContentValide);
		setAuthorValide(isAuthorValide);
		// Formulaire valide ?
		/* Juste en dessous avec le useEffect */
	};
	useEffect(() => {
		if (titleValide && contentValide && authorValide){
			setFormValide(true);
		}
	},[titleValide, contentValide, authorValide]);

	// Submit form
	const handleSubmit = (e) => {
		e.preventDefault();
		const post = {
			title:title,
			content:content,
			author:author
		};
		createPost(post);
		// Retour à la liste
		history.push('/');
	};

	// Return
	return(
		<div className="m-4">
			<h1>Nouveau post</h1>
			<form onSubmit={ handleSubmit }>
				<div className="form-group">
					<label htmlFor="title">Titre</label>
					<input ref={ inputRef } type="text" id="title" name="title" className="form-control" 
						onChange={ handleChange } value={ title }/>
					<div style={ { marginTop:'10px', color:'firebrick' } }>{ titleError }</div>
				</div>
				<div className="form-group">
					<label htmlFor="content">Description</label>
					<input type="textarea" name="content" id="content" className="form-control" 
						onChange={ handleChange } value={ content }/>
					<div style={ { marginTop:'10px', color:'firebrick' } }>{ contentError }</div>
				</div>
				<div className="form-group">
					<label htmlFor="author">Auteur</label>
					<input type="text" name="author" id="author" className="form-control" 
						onChange={ handleChange } value={ author }/>
					<div style={ { marginTop:'10px', color:'firebrick' } }>{ authorError }</div>
				</div>
				<Link to="/" style={ { marginRight:'10px' } }>
					<button className="btn btn-danger">
						Retour
					</button>
				</Link>
				<button type="submit" disabled={ !formValide } className="btn btn-primary">Créer</button>
			</form>
		</div>
	);

};

// Actions (AC) vers les props
const mapDispatchToProps = {
	createPost
};

// Export
export default connect(null, mapDispatchToProps)(PostForm);
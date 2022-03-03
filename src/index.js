// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers';

// Store
const createStoreWithMiddleare = applyMiddleware(thunk)(createStore);

// ReactDOM
ReactDOM.render(
	<React.StrictMode>
		<Provider store={ createStoreWithMiddleare(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) }>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute} from 'react-router';
import thunk from 'redux-thunk';
import history from './history';
import rootReducer from './reducers';
import './index.css';
import App from './App';
import Demo from './pages/demo/Demo';
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route path="/" exact component={App}/>
                <Route path="/demo" component={Demo}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
// registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute} from 'react-router';
import thunk from 'redux-thunk';
import history from './history';
import './index.css';
import App from './App';
import rootReducer from './reducers';
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk));
console.log('=====ssss', store);
ReactDOM.render(
    // <App />, 
    <Provider store={store}>
        {/* <App/> */}
    <Router history={history}>
      <Route path="/" component={App}>
        {/* <Route path="foo" component={Foo}/>
        <Route path="bar" component={Bar}/> */}
      </Route>
    </Router>
  </Provider>,
    document.getElementById('root')
);
// registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import history from './utils/history';
import rootReducer from './reducers';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';


const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={zhCN}>
      <App history={history} />
    </LocaleProvider>
  </Provider>,
  document.getElementById('root'),
);
// registerServiceWorker();

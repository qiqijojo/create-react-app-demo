import React from 'react';
import { Layout } from 'antd';
import { Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import LeftMenu from './components/layout/LeftMenu';
import Header from './components/layout/Header';
import Home from './pages/home/Home';
import Demo from './pages/demo/Demo';
// import './App.css';

const AntContent = Layout.Content;
const AppLayout = ({ component: Component, ...rest }) => (
  <Layout>
    <Header />
    <Layout>
      <LeftMenu />
      <AntContent>
        <Component {...rest} />
      </AntContent>
    </Layout>
  </Layout>
);

const App = ({ history }) => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact render={() => <AppLayout component={Home} />} />
      <Route path="/demo" exact render={() => <AppLayout component={Demo} />} />
    </Switch>
  </Router>
);
App.propTypes = {
  history: PropTypes.shape({}).isRequired,
};
AppLayout.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
};
export default App;

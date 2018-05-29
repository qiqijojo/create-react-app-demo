import React from 'react';
import { Layout } from 'antd';
import { Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import LeftMenu from './components/layout/LeftMenu';
import Header from './components/layout/Header';
import AgentOrganize from './pages/hr/AgentOrganize';
import AgentStuff from './pages/hr/AgentStuff';
import Demo from './pages/demo/Demo';
import './App.less';

const AntContent = Layout.Content;
const AppLayout = ({ component: Component, ...rest }) => (
  <Layout className="app-wrapper">
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
      <Route path="/" exact render={() => <AppLayout component={Demo} />} />
      <Route path="/hr/agent/org" exact render={() => <AppLayout component={AgentOrganize} />} />
      <Route path="/hr/agent/stuff" exact render={() => <AppLayout component={AgentStuff} />} />
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

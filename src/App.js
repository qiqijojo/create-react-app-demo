import React, { Component } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
// import './App.css';

class App extends Component {
  handleAppClick = () => {
    this.props.history.push('/demo');
  }
  render() {
    return (
      <div>
        asddadsdss
        <Button type="primary" onClick={this.handleAppClick}>按钮hello</Button>
      </div>
    );
  }
}
App.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
export default App;

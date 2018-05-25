import React, { Component } from 'react';
import { Button } from 'antd';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  appClick = () => {
    this.props.history.push('/demo');
  }
  render() {
    return (
      <div>
        asddadsdss
        <Button type="primary" onClick={this.appClick}>按钮hello</Button>
      </div>
    );
  }
}

export default App;

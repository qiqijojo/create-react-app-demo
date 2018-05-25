import React, { Component } from 'react';
import { Button } from 'antd';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('props', this)
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
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <p>来呀一起玩react！！！！ss！</p>
      // </div>
    );
  }
}

export default App;

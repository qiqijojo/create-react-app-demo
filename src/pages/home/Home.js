import React, { Component } from 'react';
import { Button } from 'antd';
import history from '../../utils/history';
// import { bindActionCreators } from 'redux';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myState2: 'rrrrrr',
    };
  }
  handleAppClick = () => {
    console.log('his', this);
    history.push('/demo');
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleAppClick}>我是Home页面</Button>
        <div>{this.state.myState2}</div>
      </div>
    );
  }
}
export default Home;

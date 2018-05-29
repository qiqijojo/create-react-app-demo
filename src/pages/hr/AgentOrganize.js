import React, { Component } from 'react';
import { Button } from 'antd';
import history from '../../utils/history';

class AgentOrganize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myState2: 'rrrrrr',
    };
  }
  handleAppClick = () => {
    history.goBack();
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleAppClick}>我是代理商组织架构页面</Button>
        <div>{this.state.myState2}</div>
      </div>
    );
  }
}
export default AgentOrganize;

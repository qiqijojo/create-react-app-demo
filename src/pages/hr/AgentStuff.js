import React, { Component } from 'react';
import { Button } from 'antd';
import history from '../../utils/history';

class AgentStuff extends Component {
  handleAppClick = () => {
    // history.goBack();
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleAppClick}>我是代理商员工管理页面</Button>
      </div>
    );
  }
}
export default AgentStuff;

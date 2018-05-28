import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

const AntSider = Layout.Sider;

class LeftMenu extends Component {
    state = {
      collapsed: false,
    };
    handleToggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    }
    render() {
      return (
        <AntSider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </AntSider>
      );
    }
}
export default LeftMenu;

import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import './LeftMenu.less';

const AntSider = Layout.Sider;
const { SubMenu } = Menu;
class LeftMenu extends Component {
  render() {
    return (
      <AntSider className="sider-wrapper">
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <SubMenu title={<span><Icon type="user" />人事管理</span>}>
            <Menu.Item key="1">
              <span>代理商组织架构</span>
            </Menu.Item>
            <Menu.Item key="2">
              <span>代理商员工管理</span>
            </Menu.Item>
            <Menu.Item key="3">
              <span>渠道组织架构</span>
            </Menu.Item>
            <Menu.Item key="4">
              <span>渠道员工管理</span>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </AntSider>
    );
  }
}
export default LeftMenu;

import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import './LeftMenu.less';
import history from '../../utils/history';

const AntSider = Layout.Sider;
const { SubMenu } = Menu;
class LeftMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: ['1001', '100'],
    };
  }
  handleMenu = ({ key, keyPath }) => {
    switch (key) {
      case '1001':
        history.push('/manage/hr/agent/org');
        this.setState({
          selectedKeys: keyPath,
        });
        break;
      case '1002':
        history.push('/manage/hr/agent/stuff');
        this.setState({
          selectedKeys: keyPath,
        });
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <AntSider>
        <Menu theme="dark" mode="inline" selectedKeys={this.state.selectedKeys} onClick={this.handleMenu}>
          <SubMenu key="100" title={<span><Icon type="user" />人事管理</span>}>
            <Menu.Item key="1001">
              <span>代理商组织架构</span>
            </Menu.Item>
            <Menu.Item key="1002">
              <span>代理商员工管理</span>
            </Menu.Item>
            <Menu.Item key="1003">
              <span>渠道组织架构</span>
            </Menu.Item>
            <Menu.Item key="1004">
              <span>渠道员工管理</span>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </AntSider>
    );
  }
}
export default LeftMenu;

import React from 'react';
import { Layout } from 'antd';
import './Header.less';

const AntHeader = Layout.Header;

const Header = () => (
  <AntHeader>
    <div className="logo" />
    <div className="nav-text">CRM后台</div>
  </AntHeader>
);

export default Header;

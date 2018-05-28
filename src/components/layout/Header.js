import React from 'react';
import { Layout } from 'antd';

const AntHeader = Layout.Header;

const Header = () => (
  <AntHeader>
    <div className="logo" />
    <div className="topWidth">代理商CRM</div>
  </AntHeader>
);

export default Header;

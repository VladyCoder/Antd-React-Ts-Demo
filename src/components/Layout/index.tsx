import React from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';

import Header from './Header';
import Sidebar from './Sidebar';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode
}

const MainLayout = ({children}: LayoutProps) => {
  return (
    <Layout>
      <Header />
      <Layout>
        <Sidebar />
        <Layout className="main">
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Form</Breadcrumb.Item>
          </Breadcrumb>
          <Layout.Content>
            {children}
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default MainLayout;

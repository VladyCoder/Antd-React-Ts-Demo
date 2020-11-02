import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { PieChartOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Sider } = Layout;

function Sidebar() {
  return (
    <Sider width={200}>
      <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}><Link to="/">Form</Link></Menu.Item>
          
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="component 2">
            <Menu.Item key="5"><Link to="/option1">Option 1</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/option2">Option 2</Link></Menu.Item>
            <Menu.Item key="7"><Link to="/option3">Option 3</Link></Menu.Item>
          </SubMenu>
        </Menu>
    </Sider>
  );
}

export default Sidebar;

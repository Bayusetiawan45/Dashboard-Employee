import {
  RightCircleOutlined,
  LeftCircleOutlined,
  HomeOutlined,
  UserOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import "./Layout.css";
import React, {  useState } from "react";
import { Link } from "react-router-dom";
import MenuItem from "antd/lib/menu/MenuItem";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState("Home");

  const handleChangeRoute = (e) => {
    setCurrent(e.key);
  };


  const AppLayout = (PropsContent) => {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            onClick={handleChangeRoute}
            selectedKeys={[current]}
          >
            <MenuItem key="home" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem key="about" icon={<UserOutlined />}>
              <Link to="/about">About</Link>
            </MenuItem>
            <MenuItem key="contact" icon={<PhoneOutlined />}>
              <Link to="/contact">Contact</Link>
            </MenuItem>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            {React.createElement(
              collapsed ? RightCircleOutlined : LeftCircleOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <PropsContent />
          </Content>
        </Layout>
      </Layout>
    );
  };

  return { AppLayout };
};

export default MainLayout;

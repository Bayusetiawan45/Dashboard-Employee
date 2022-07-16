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
import React, { useState } from "react";
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const AppLayout = (PropsContent) => {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <HomeOutlined />,
                label: "Home",
              },
              {
                key: "2",
                icon: <UserOutlined />,
                label: "About",
              },
              {
                key: "3",
                icon: <PhoneOutlined />,
                label: "Contact",
              },
            ]}
          />
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
            <PropsContent/>
          </Content>
        </Layout>
      </Layout>
    );
  };

  return { AppLayout };
};

export default MainLayout;

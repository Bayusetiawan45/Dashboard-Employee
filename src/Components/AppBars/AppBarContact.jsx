import { Space, Typography, Button, Form, Input, Divider, message } from "antd";
import {
  GithubOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import React from "react";

const AppBarContact = () => {
  const { Text, Title } = Typography;
  const key = 'updatable';

  const layout = {
    labelCol: {
      span: 10,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
  };

  const openMessage = () => {
    message.loading({
      content: 'Sending message...',
      key,
    });
    setTimeout(() => {
      message.success({
        content: 'Success! Thanks for your suggestion',
        key,
        duration: 2,
      });
    }, 1000);
  };

  const onFinish = (values) => {
    openMessage()
  };

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Title level={4}>Contact Us</Title>
      <Space
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
        align="start"
      >
        <Space direction="vertical">
          <Space size="large">
            <GithubOutlined />
            <InstagramOutlined />
            <TwitterOutlined />
            <YoutubeOutlined />
          </Space>
          <Divider orientation="left" orientationMargin="0">
            Email
          </Divider>
          <Text>bayusetiawanipb@gmail.com</Text>
          <Divider orientation="left" orientationMargin="0">
            Based in
          </Divider>
          <Text>Tangerang, Indonesia</Text>
        </Space>
        <Space
          direction="vertical"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Title level={4}>Message Form</Title>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
            style={{ width: "100%" }}
          >
            <Form.Item
              name={["user", "name"]}
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[
                {
                  type: "email",
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={["user", "message"]} label="Your Message">
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit" >
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </Space>
    </Space>
  );
};

export default AppBarContact;

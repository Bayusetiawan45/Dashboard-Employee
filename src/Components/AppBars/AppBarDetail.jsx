import { Space, Typography } from "antd";
import React from "react";
import { useParams } from "react-router-dom";

const AppBarDetail = () => {
  const { id } = useParams();

  const data = require("../../Configs/dataEmployees.json");
  const filterData = data.filter((item) => item.key == id);
  const newData = filterData[0];

  const { Text, Title } = Typography;

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Title level={4}>Employee Detail</Title>
      <Space
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "#fafafa",
          padding: "10px",
        }}
      >
        <Text>Name</Text>
        <Text>{newData.name}</Text>
      </Space>
      <Space
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <Text>Email</Text>
        <Text>{newData.email}</Text>
      </Space>
      <Space
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "#fafafa",
          padding: "10px",
        }}
      >
        <Text>Division</Text>
        <Text>{newData.division}</Text>
      </Space>
      <Space
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <Text>Age</Text>
        <Text>{newData.age}</Text>
      </Space>
      <Space
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "#fafafa",
          padding: "10px",
        }}
      >
        <Text>Status</Text>
        <Text>{newData.status}</Text>
      </Space>
      <Space
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <Text>Address</Text>
        <Text>{newData.address}</Text>
      </Space>
    </Space>
  );
};

export default AppBarDetail;

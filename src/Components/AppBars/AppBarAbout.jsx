import { Typography, Carousel, Image } from "antd";
import React from "react";

const AppBarAbout = () => {
  const { Title } = Typography;
  const contentStyle = {
    height: "360px",
    color: "#fff",
    lineHeight: "360px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <>
      <Title level={4}>About</Title>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>Hello There!</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Welcome to my website</h3>
        </div>
        <div>
          <h3 style={contentStyle}>This is my first experience using ANT Design</h3>
        </div>
      </Carousel>
    </>
  );
};

export default AppBarAbout;

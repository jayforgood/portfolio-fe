import React, { Component } from "react";
import { Breadcrumb } from "antd";
import { Layout } from "antd";

const { Content } = Layout;

class Intro extends Component {
  state = {};

  render() {
    return (
      <>
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Intro</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            // background: "#dbdbdb",
          }}
        >
          안녕하세요. 프론트엔드 개발자 이재훈 입니다.
        </Content>
      </>
    );
  }
}

export default Intro;

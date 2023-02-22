import React, { Component } from "react";
import { Breadcrumb } from "antd";
import { Layout } from "antd";

const { Content } = Layout;

class Contact extends Component {
  state = {};

  render() {
    return (
      <>
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Contact</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            // background: "#dbdbdb",
          }}
        >
          이메일 jayforgood@gmail.com
        </Content>
      </>
    );
  }
}

export default Contact;

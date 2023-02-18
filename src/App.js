import React from "react";
import { Layout, Space } from "antd";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Project from "./components/Project";
import Contact from "./components/Contact";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};
const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

function App() {
  return (
    <div className="App">
      <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
        <Layout>
          <Header style={headerStyle}>Header</Header>
          <Layout>
            <Sider style={siderStyle}>Sider</Sider>
            <Content style={contentStyle}>
              <p>Content</p>
              <Nav>네이게이션</Nav>
              <Intro>인트로</Intro>
              <Project>프로젝트</Project>
              <Contact>컨텍트</Contact>
            </Content>
          </Layout>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Space>
    </div>
  );
}

export default App;

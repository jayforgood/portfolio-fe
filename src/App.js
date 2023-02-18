import React from "react";
import { Layout, Space, Menu } from "antd";
import Intro from "./components/Intro";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { LIST } from "./assets/js/dummy/constants";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

const logoStyle = {
  float: "left",
  width: "120px",
  height: "31px",
  margin: "16px 24px 16px 0",
  background: "rgba(255, 255, 255, 0.3)",
};

const siteLayoutContent = {
  minHeight: "280px",
  padding: "24px",
};

function App() {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  return (
    <div className="App">
      <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
        <Layout className="layout">
          <Header style={headerStyle}>
            <div style={logoStyle}></div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              items={LIST.map((item, index) => {
                const key = index + 1;
                return {
                  key,
                  label: `${item}`,
                };
              })}
            />
          </Header>
          <Layout>
            <Sider style={siderStyle}>Sider</Sider>
            <Content style={contentStyle}>
              <div style={siteLayoutContent}>
                <p>Content</p>
                <Intro>인트로</Intro>
                <Project>프로젝트</Project>
                <Contact>컨텍트</Contact>
              </div>
            </Content>
          </Layout>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Space>
    </div>
  );
}

export default App;

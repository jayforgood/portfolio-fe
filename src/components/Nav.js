// import React from "react";
import "./Nav.css";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import React, { Component } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { LIST } from "@assets/js/dummy/constants";
import { Menu } from "antd";
import Project from "@pages/Project";
import { Layout, Space, theme } from "antd";

const { Header, Footer, Sider, Content } = Layout;

// const headerStyle = {
//   textAlign: "center",
//   color: "#fff",
//   height: 64,
//   paddingInline: 50,
//   lineHeight: "64px",
//   backgroundColor: "#7dbcea",
// };
// const contentStyle = {
//   // textAlign: "left",
//   minHeight: 120,
//   lineHeight: "120px",
//   // color: "#fff",
//   // backgroundColor: "#108ee9",
// };
// const siderStyle = {
//   textAlign: "center",
//   lineHeight: "120px",
//   color: "#fff",
//   backgroundColor: "#3ba0e9",
// };
// const footerStyle = {
//   textAlign: "center",
//   color: "#fff",
//   backgroundColor: "#7dbcea",
// };

// const logoStyle = {
//   float: "left",
//   width: "120px",
//   height: "31px",
//   margin: "16px 24px 16px 0",
//   background: "rgba(255, 255, 255, 0.3)",
// };

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

class Nav extends Component {
  // const Nav = () => {
  state = {};

  render() {
    return (
      <>
        {/* <Space
          direction="vertical"
          style={{ width: "100%", hight: "100%" }}
          size={[0, 48]}
        > */}
        <Layout>
          <Header className="header" theme="light">
            <div className="logo" />
            <div
              style={{
                height: 32,
                width: 100,
                margin: 16,
                background: "rgba(200, 200, 200, 0.2)",
              }}
            />
          </Header>
          <Layout>
            <Sider breakpoint="md" collapsedWidth="0" width={200}>
              {/* <div className="logo" /> */}
              <Menu
                // style={{
                //   width: 256,
                // }}
                style={{
                  height: "100%",
                  borderRight: 0,
                }}
                theme="light"
                mode="inline"
                defaultSelectedKeys={["1"]}
                // items={items}
                items={LIST.map((item, index) => {
                  const key = index + 1;
                  return {
                    key,
                    label: item.title,
                  };
                })}
              />
            </Sider>
            <Layout
              style={{
                padding: "0 24px 24px",
              }}
            >
              <Outlet />
            </Layout>
          </Layout>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Jay ©2023 Created by Jaehoon Lee
          </Footer>
        </Layout>
        {/* </Space> */}
      </>
    );
  }
}

export default Nav;

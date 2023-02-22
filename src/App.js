import React from "react";
import { Layout, Space } from "antd";
import Nav from "@components/Nav";
import Main from "@pages/Main";
import Intro from "@pages/Intro";
import Project from "@pages/Project";
// import Contact from "@components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
  // textAlign: "left",
  // minHeight: 120,
  // lineHeight: "120px",
  // color: "#fff",
  // backgroundColor: "#108ee9",
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

function App() {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  // const [position, setPosition] = useState("bottom");
  // const [align, setAlign] = useState("center");
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route path="/" element={<Main />} />
        <Route path="/project" element={<Project />} />

        {/* <Route path="/stores/:storeId/*" element={<Store />} />
        <Route element={<ProtectRoute />}>
          <Route path="/stores/:storeId/write" element={<Write />} />
          <Route path="/stores/:storeId/edit/:reviewId" element={<Edit />} />
        </Route> */}
      </Route>
      <Route path="/main" element={<Main />} />
    </Routes>

    // <div className="App">
    //   <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
    //     <Layout className="layout">
    //       <Header style={headerStyle}>
    //         <div style={logoStyle}></div>
    //         <Nav />
    //       </Header>
    //       <Layout>
    //         <Sider style={siderStyle}>Jaehoon Lee Projects</Sider>
    //         <Content style={contentStyle}>
    //           <Route path="/" element={<Main />}></Route>
    //           {/* <Project>프로젝트</Project> */}
    //         </Content>
    //       </Layout>
    //       <Footer style={footerStyle}>Footer</Footer>
    //       {/* <Routes>
    //           <Route path="/" element={<Intro />}></Route>
    //           <Route path="/product/*" element={<Project />}></Route>
    //           <Route path="*" element={<NotFound />}></Route>
    //         </Routes> */}
    //     </Layout>
    //   </Space>
    // </div>
    // <div className="App">
    //   <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
    //     <Layout className="layout">
    //       <Header style={headerStyle}>
    //         <div style={logoStyle}></div>
    //         <Nav />
    //       </Header>
    //       <Layout>
    //         <Sider style={siderStyle}>Jaehoon Lee Projects</Sider>
    //         <Content style={contentStyle}>
    //           <Project>프로젝트</Project>
    //         </Content>
    //       </Layout>
    //       <Footer style={footerStyle}>Footer</Footer>
    //     </Layout>
    //   </Space>
    // </div>
  );
}

export default App;

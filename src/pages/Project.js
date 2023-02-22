import React, { Component } from "react";
// import ProjectList from "@ProjectList";
import { PROJECT_LIST } from "@assets/js/dummy/constants";

import { List, Breadcrumb, Image } from "antd";
import { Layout } from "antd";

const { Content } = Layout;

// const positionOptions = ["top", "bottom", "both"];
// const alignOptions = ["start", "center", "end"];

class Project extends Component {
  //  state = { position, align };

  render() {
    // const [position, setPosition] = useState("bottom");
    // const [align, setAlign] = useState("center");

    return (
      <>
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Previous work</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            // background: "#dbdbdb",
          }}
        >
          <List
            //pagination={{ position, align }}
            dataSource={PROJECT_LIST}
            renderItem={(item) => (
              <List.Item>
                <Image width={100} src={item.imageUrl} />
                <List.Item.Meta
                  title={<a href="https://ant.design">{item.title}</a>}
                  description={item.desc}
                />
                {/* front:{item.front} back:{item.back} hw:{item.hw} */}
              </List.Item>
            )}
          />
        </Content>
      </>
    );
  }
}

export default Project;

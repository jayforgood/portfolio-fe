import React, { Component } from "react";
// import ProjectList from "./ProjectList";
import { PROJECT_LIST } from "../assets/js/dummy/constants";

import { List, Breadcrumb, Image } from "antd";

// const positionOptions = ["top", "bottom", "both"];
// const alignOptions = ["start", "center", "end"];

class Project extends Component {
  //  state = { position, align };

  render() {
    // const [position, setPosition] = useState("bottom");
    // const [align, setAlign] = useState("center");

    return (
      <div>
        {/* <p>Project</p>
        {PROJECT_LIST.map((li) => {
          return <ProjectList key={li.id} {...li} />;
        })} */}
        {/* <Divider plain>Previous work</Divider> */}
        <Breadcrumb>
          <Breadcrumb.Item>Previous work</Breadcrumb.Item>
        </Breadcrumb>
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
        {/* <p>Content</p>
                <Intro>인트로</Intro>
                <Project>프로젝트</Project>
                <Contact>컨텍트</Contact> */}
      </div>
    );
  }
}

export default Project;

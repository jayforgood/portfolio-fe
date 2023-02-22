import React, { Component } from "react";
import { LIST } from "../assets/js/dummy/constants";
import { Menu } from "antd";

class Nav extends Component {
  state = {};

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Nav;

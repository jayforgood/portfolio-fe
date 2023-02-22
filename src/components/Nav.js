import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import React, { Component } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { LIST } from "@assets/js/dummy/constants";
import { Menu } from "antd";
import Project from "@pages/Project";

// const Nav = () => {
// }
// export default Nav
// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }
// const items = [
//   getItem('Navigation One', '1', <MailOutlined />),
//   getItem('Navigation Two', '2', <CalendarOutlined />),
//   getItem('Navigation Two', 'sub1', <AppstoreOutlined />, [
//     getItem('Option 3', '3'),
//     getItem('Option 4', '4'),
//     getItem('Submenu', 'sub1-2', null, [getItem('Option 5', '5'), getItem('Option 6', '6')]),
//   ]),
//   getItem('Navigation Three', 'sub2', <SettingOutlined />, [
//     getItem('Option 7', '7'),
//     getItem('Option 8', '8'),
//     getItem('Option 9', '9'),
//     getItem('Option 10', '10'),
//   ]),
//   getItem(
//     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
//       Ant Design
//     </a>,
//     'link',
//     <LinkOutlined />,
//   ),
// ];
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(LIST[0].title, "1", <MailOutlined />),
  getItem(LIST[2].title, "2", <MailOutlined />),
  getItem(
    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
      Ant Design
    </a>,
    "link",
    <MailOutlined />
  ),
];

class Nav extends Component {
  state = {};

  render() {
    return (
      <>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          // items={items}
          items={LIST.map((item, index) => {
            const key = index + 1;
            return {
              key,
              label: item.title,
            };
          })}
        />
        <main>
          <Outlet />
        </main>
      </>
    );
  }
}

export default Nav;

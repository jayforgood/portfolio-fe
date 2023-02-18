import React, { Component } from "react";
import { LIST } from "../assets/js/dummy/constants";

class Nav extends Component {
  state = {};

  render() {
    return (
      <div>
        <p>Nav</p>
        <div>
          {LIST.map((li, idx) => {
            return <li key={idx}>{li}</li>;
          })}
        </div>
      </div>
    );
  }
}

export default Nav;

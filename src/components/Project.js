import React, { Component } from "react";
import ProjectList from "./ProjectList";
import { PROJECT_LIST } from "../assets/js/dummy/constants";

class Project extends Component {
  state = {};

  render() {
    return (
      <div>
        <p>Project</p>
        {PROJECT_LIST.map((li) => {
          return <ProjectList key={li.id} {...li} />;
        })}
      </div>
    );
  }
}

export default Project;

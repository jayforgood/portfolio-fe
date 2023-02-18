import React, { Component } from "react";

class ProjectList extends Component {
  render() {
    const { id, title, gitHubUrl, siteUrl, role, desc, front, back } =
      this.props;
    return (
      <div>
        <title>ProjectList</title>
        <>
          <div>{id}</div>
          <div>{title}</div>
          <div>{gitHubUrl}</div>
          <div>{siteUrl}</div>
          <div>{role}</div>
          <div>{desc}</div>
          <div>{front}</div>
          <div>{back}</div>
        </>
      </div>
    );
  }
}

export default ProjectList;

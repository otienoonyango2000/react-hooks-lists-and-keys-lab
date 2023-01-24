import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const myprojects = projects.map((obj)=>{
    return <ProjectItem name={obj.name} key={obj.id} about={obj.about} technologies={obj.technologies}/>
  }  
  )
  
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{myprojects}</div>
    </div>
  );
}

export default ProjectList;

import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          // Assuming ProjectItem component can accept an onClick or similar prop for viewing the project
          return (
            <div key={idx} className="projectContainer">
              <ProjectItem id={idx} image={project.image} />
              <h2 className="projectName">{project.name}</h2> {/* Make the name appear underneath in a bold manner */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;

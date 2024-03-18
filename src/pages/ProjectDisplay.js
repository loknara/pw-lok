import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="projectContainers">
      <div className="projectVisuals">
        <img src={project.image} alt={`Visual representation of ${project.name}`} className="projectImage"/>
        <div className="projectLinks">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="githubIcon"/>
          </a>
        </div>
      </div>
      <div className="projectInfo">
        <h1>{project.name}</h1>
        <h2>Skills: {project.skills}</h2>
        <div className="projectBlurbs">
          <p>{project.blurb1}</p>
          <p>{project.blurb2}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;
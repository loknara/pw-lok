import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  let { id } = useParams();
  const project = ProjectList.find((p) => p.id === id);

  return (
    <div className="projectContainers">
      <div className="projectVisuals">
        <img
          src={project.image}
          alt={`Visual representation of ${project.name}`}
          className="projectImage"
        />
        <div className="projectLinks">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="githubIcon" style={{ fontSize: 70 }} />
          </a>
          {project.externalLink && (
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              <OpenInNewIcon
                className="openInNewIcon"
                style={{ fontSize: 70 }}
              />
            </a>
          )}
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

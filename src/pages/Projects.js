import React, { useState, useEffect } from "react";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css";
import { useNavigate } from "react-router-dom";
import TagFilter from "./TagFilter"; // Make sure this is correctly imported
import { ProjectList } from "../helpers/ProjectList";

function Experience() {
  const navigate = useNavigate();
  const [filteredProjects, setFilteredProjects] = useState(ProjectList);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const allTags = [
      ...new Set(ProjectList.flatMap((project) => project.tags)),
    ];
    setTags(allTags);
  }, []);

  const handleFilterChange = (selectedTags) => {
    if (selectedTags.length === 0) {
      setFilteredProjects(ProjectList);
    } else {
      const filtered = ProjectList.filter((project) =>
        selectedTags.some((tag) => project.tags.includes(tag))
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <div className="experience">
      <div className="tag-filter-container">
        <TagFilter availableTags={tags} onFilterChange={handleFilterChange} />
      </div>
      <div className="expcontainer">
        {filteredProjects.map((project, index) => (
          <div className="custom-card" key={project.id}>
            <div className="img-box">
              <img src={project.image} alt={project.name} />
            </div>
            <div className="custom-content">
              <h2>{project.name}</h2>

              <p>{project.skills}</p>
              <button onClick={() => navigate(`/project/${project.id}`)}>
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
